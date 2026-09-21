const mysql=require("mysql2/promise")
require("dotenv").config()


const pool=mysql.createPool({

  host:process.env.BD_HOSTNAME,
  user:process.env.BD_USER,
  password:process.env.BD_PASSWORD,
  database:process.env.BD_DATABASE,
  port:process.env.DB_PORT || 3306



})



module.exports=pool

