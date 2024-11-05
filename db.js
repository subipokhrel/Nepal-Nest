const mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://admin:admin@cluster0.ej47p.mongodb.net/mern-rooms'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB Connection Failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection Successful')
})

module.exports = mongoose