const express = require('express');
const app = express();
app.use(express.json());

const port = 9091;
const mongoose = require('mongoose');

app.disable('etag');
mongoose.connect("mongodb://127.0.0.1:27017/assign8", { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.connection.on('connected', function(){
  console.log("Connection with MongoDB is established");
});



//Importing user Routes
const userRoute = require('./routes/userRoute');
app.use('/api/user', userRoute);







app.listen(port, () => {
  console.log("Node application listening on port ", port); 
});
