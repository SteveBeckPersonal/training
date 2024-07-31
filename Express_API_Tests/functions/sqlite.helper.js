const sqlite3 = require('sqlite3').verbose();

export class SQLite3Database {
    constructor(databaseFile) {
      this.db = new sqlite3.Database(databaseFile, (err) => {
        if (err) {
          console.error('Could not connect to database', err);
        } else {
          console.log('Connected to database');
        }
      });
    }
  
    runQuery(sql, params = []) {
      return new Promise((resolve, reject) => {
        this.db.run(sql, params, function (err) {
          if (err) {
            console.error('Error running sql', err);
            reject(err);
          } else {
            resolve({ id: this.lastID });
          }
        });
      });
    }
  
    getQuery(sql, params = []) {
      return new Promise((resolve, reject) => {
        this.db.get(sql, params, (err, row) => {
          if (err) {
            console.error('Error running sql', err);
            reject(err);
          } else {
            resolve(row);
          }
        });
      });
    }
  
    allQuery(sql, params = []) {
      return new Promise((resolve, reject) => {
        this.db.all(sql, params, (err, rows) => {
          if (err) {
            console.error('Error running sql', err);
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }
  
    close() {
      return new Promise((resolve, reject) => {
        this.db.close((err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }