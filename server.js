// Require necessary NPM packages
const express = require('express')
const mongoose = require ('mongoose')
const db = mongoose.connection

// Require DB configuration file
const dbConfig = require ('./config/db')

// Establish database connection
mongoose.connect(dbConfig)
db.on('error', (error) => console.log(`ERROR: ${error.message}`))
db.on('connected', () => console.log(`MongoDB Connected: ${dbConfig}`))
db.on('disconnected', () => console.log('MongoDB Disconnected'))

// Require necessary route files
const indexRouter = require('./routes/index')

// Instantiate express application object
const app = express()

// Define port for the API to run on
// Try to find an environment first, if not then go for 5000
const port = process.env.PORT || 5004

// Mount the required routes (like a middleware)
app.use(indexRouter)


// Start the server and listen for requests on the given port
app.listen(port, () => console.log(`bloggy is listening on port ${port}`))