const express = require('express');
const sql = require('mssql/msnodesqlv8');
const Product = require('./models/product');
const { swaggerUi, specs } = require('./swagger');

const app = express();
const port = process.env.PORT || 3000;

// SQL Server configuration with Windows Authentication
const config = {
    server: 'localhost', // Update with your SQL Server instance name
    database: 'Training',
    options: {
        trustedConnection: true, // Use Windows Authentication
        trustServerCertificate: true
    },
    driver: "msnodesqlv8", 
};

// Middleware
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.get('/api/products', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query('SELECT * FROM products');
        res.json(result.recordset);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/products', async (req, res) => {
    const { name, price } = req.body;
    const product = new Product(null, name, price);
    try {
        const pool = await sql.connect(config);
        await pool.request()
            .input('name', sql.NVarChar, product.name)
            .input('price', sql.Real, product.price)
            .query('INSERT INTO products (name, price) VALUES (@name, @price)');
        res.json({ id: product.id, ...product });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/api/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('id', sql.Int, productId)
            .query('SELECT * FROM products WHERE id = @id');
        if (result.recordset.length === 0) {
            res.status(404).send('Product not found');
        } else {
            res.json(result.recordset[0]);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/api/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('id', sql.Int, productId)
            .query('DELETE FROM products WHERE id = @id');
        if (result.rowsAffected[0] === 0) {
            res.status(404).send('Product not found');
        } else {
            res.status(204).send();
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
