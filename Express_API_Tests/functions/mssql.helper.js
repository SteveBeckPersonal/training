const sql = require('mssql/msnodesqlv8');

export class MSSQLDatabase {
  constructor(config) {
    this.config = config;
    this.pool = null;
  }

  async connect() {
    if (!this.pool) {
      try {
        this.pool = await sql.connect(this.config);
        console.log('Connected to database');
      } catch (err) {
        console.error('Could not connect to database', err);
      }
    }
  }

  async close() {
    if (this.pool) {
      try {
        await this.pool.close();
        this.pool = null;
        console.log('Database connection closed');
      } catch (err) {
        console.error('Error closing the database connection', err);
      }
    }
  }

  async runQuery(query, params = {}) {
    await this.connect();
    try {
      const request = this.pool.request();
      for (const param in params) {
        request.input(param, params[param]);
      }
      const result = await request.query(query);
      return result.recordset;
    } catch (err) {
      console.error('Error running query', err);
      throw err;
    }
  }

  async runQueryNonSelect(query, params = {}) {
    await this.connect();
    try {
      const request = this.pool.request();
      for (const param in params) {
        request.input(param, params[param]);
      }
      const result = await request.query(query);
      return result.rowsAffected;
    } catch (err) {
      console.error('Error running query', err);
      throw err;
    }
  }
}


