// Import the mongoose library, which is an ODM (Object Data Modeling) library for MongoDB and Node.js
const mongoose = require("mongoose");

// Define the MongoDB connection string (URL) for the database
// Replace 'admin:admin' with your actual username and password
var mongoURL = 'mongodb+srv://admin:admin@cluster0.ej47p.mongodb.net/mern-rooms';

// Connect to the MongoDB database using the connection string
mongoose.connect(mongoURL, {
    // Options to use the new URL parser and unified topology
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a variable to hold the connection object
var connection = mongoose.connection;

// Listen for connection errors
connection.on('error', () => {
    // Log a message to the console if the connection fails
    console.log('Mongo DB Connection Failed');
});

// Listen for successful connection events
connection.on('connected', () => {
    // Log a message to the console if the connection is successful
    console.log('Mongo DB Connection Successful');
});

// Export the mongoose object so that it can be used in other files
module.exports = mongoose;