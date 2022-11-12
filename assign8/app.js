const express = require('express');
const app = express();
const port = 9091;

const allRoutes = require('./routes/routes')
const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/assign8", { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.connection.on('connected', function(){
  console.log("Connection with MongoDB is established");
})




allRoutes(app);


app.listen(port, () => {
  console.log("Node application listening on port ", port); 
});
