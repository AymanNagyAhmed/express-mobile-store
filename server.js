var express = require("express");
var mongoose = require("mongoose");
var morgan = require("morgan");
var dotenv = require("dotenv").config();
var database = require("./config/database");
var routes = require("./routes/index");
var app = express();
var port = process.env.APP_PORT || 5000;

mongoose.connect(database.dbConnection)
.then(()=> console.log('connection successfully'))
.catch((err)=> console.log(err));

app.use(morgan("dev"));
app.use(express.json());
app.use("/api",routes);
app.all("*",(req,res)=>{
    res.status(400).send({message:"route not found !!"})
});


app.listen(port, () => {
  console.log(`All Done Successfully ${port}`);
});