require('dotenv').config();
const { Pool } = require('pg');

let dbUrl = '';

// if(!dbUrl) throw new

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.DB_URL_TEST;
} else if (process.env.NODE_ENV === 'development') {
  dbUrl = process.env.DB_URL_DEV;
} else {
  dbUrl = process.env.DATABASE_URL;
}
console.log(dbUrl, 'connection')
const option = {
  connectionString: dbUrl,
  ssl: { rejectUnauthorized: false },
};

module.exports = new Pool(option);
