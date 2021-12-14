const sql = require('mssql')
const mysql = require('mysql')




const pool= mysql.createPool({
  connectionLimit: 20,
  host: process.env.SERVER_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PWS,
  database: process.env.DATABASE_NAME,
  options:{
    encrypt: true,
    trustServerCertificate: false
  }
})



module.exports = {
  pool
};