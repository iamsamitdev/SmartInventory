// Import Express Module
const express = require('express')

// Import fs Module
const fs = require('fs')

// Import mysql_dbconfig.js Module
const dbConnectMySQL = require('../config/mysql_dbconfig')

// Create Router
const router = express.Router()

// Create Routing Methods
router.get('/', (req, res) => {

  // Create MySQL Query
  let sql = 'SELECT * FROM products'

  // Execute MySQL Query
  dbConnectMySQL.query(sql, (err, result) => {
    if(err) throw err
    // console.log(result)
    // res.send(result)
    res.render('pages/index.ejs', {products: result})
  })
  
})

module.exports = router