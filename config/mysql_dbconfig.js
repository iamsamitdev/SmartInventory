// Import MySQL Module
const mysql = require('mysql')

// Create MySQL Connection
// Localhost
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'inventorydb',
//   port: 3306
// })

// Clever Cloud
const connection = mysql.createConnection({
  host: 'bntrigtltmrz1d4nsjou-mysql.services.clever-cloud.com',
  user: 'upup0s3fcqie3d5z',
  password: 'hZ11tZfZqW9kvTia9DGz',
  database: 'bntrigtltmrz1d4nsjou',
  port: 3306
})

// Connect to MySQL
connection.connect((err) => {
  if(err) {
    console.log(err)
  }else {
    console.log('MySQL Database Connected Successfully')
  }
})

// Export MySQL Connection
module.exports = connection