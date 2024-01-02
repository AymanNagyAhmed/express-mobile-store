
var dotenv = require("dotenv").config();

// username: "admin"
//  pass: "mYB29ei4IEFnj3jH"
let atlas_url =
  "mongodb+srv://admin:mYB29ei4IEFnj3jH@cluster1.qiabp4e.mongodb.net/test_db";

let dbConn =
  "mongodb://" +
    (process.env.DB_HOST || "localhost") +
    ":" +
    process.env.DB_PORT || "27017" + 
    "/" + 
    process.env.DB_NAME || "test_db";
module.exports = {
  dbConnection: dbConn,
};
