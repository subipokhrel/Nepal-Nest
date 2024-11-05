// Import the express module, which is a web framework for Node.js
const express = require("express");

// Create an instance of an Express application
const app = express();

// Import the database configuration from the db.js file
const dbConfig = require('./db');

// Set the port number for the server to listen on. 
// It will use the environment variable PORT if it's set, otherwise it defaults to 5000.
const port = process.env.PORT || 5000;

// Start the server and listen on the specified port
// Once the server is running, it will log a message to the console
app.listen(port, () => console.log('Node Server Started'));

// Alternative log message that shows the port number
// app.listen(port, () =>  `Server running on port ${port}`);
