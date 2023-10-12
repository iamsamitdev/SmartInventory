// Import Path Module
const path = require('path')

// Import Router Module
const router = require('./router/url')

// Import Express Module
const express = require('express')

// Create Express App
const app = express()

// เรียกใช้งาน Router ที่เราสร้างไว้
app.use('/', router)

// Run Express Server at Port 3000
app.listen(
  3000, 
  () => console.log('Server running on port 3000')
)