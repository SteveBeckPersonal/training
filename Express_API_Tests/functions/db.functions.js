const sqlite3 = require('sqlite3').verbose();


export function query(sql) {
    return new Promise((resolve, reject) => {
        const loc = "C:\\InspiredTesting\\Training\\Express_Server_Session1\\products.db";
        const db = new sqlite3.Database(loc, (err) => {
            if (err) {
                console.error(err.message);
                reject(err);
                return;
            }
            console.log('Connected to the SQLite database.');

            db.all(sql, (err, rows) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else {
                    resolve(rows);
                }
            });

            // Close the database connection after the query is executed
            db.close((err) => {
                if (err) {
                    console.error(err.message);
                }
            });
        });
    });
}

export function insert(){

}