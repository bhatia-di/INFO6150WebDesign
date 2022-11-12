const express = require("express");
var bodyParser = require('body-parser');

const app = express();


app.use(express.json());


//Importing health Routes
const healthRoute = require('./routes/healthRoute');
app.use('/healthz', healthRoute);

const dbhealthRoute = require('./routes/dbtestRoute');
app.use('/dbtest', dbhealthRoute);


const userRoute = require('./routes/userRoute');
app.use('/v1/user', userRoute);








app.listen('4000', () => {

    console.log("Server is listening on port 4000");

});
