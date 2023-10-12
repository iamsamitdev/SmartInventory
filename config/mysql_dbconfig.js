// Import MySQL Module
const mysql = require('mysql')

// Create MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'inventorydb',
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