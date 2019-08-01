const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const util = require("util");
const items = require("./routes/api/items");

const app = express();
const connection = mysql.createConnection({
    host: "kyjdb.cdzelssaqpcy.ap-northeast-2.rds.amazonaws.com",
    user: "kyjyeon",
    password: "",
    database: "coin",
    port: 3400
});
const query = util.promisify(connection.query).bind(connection);
const PORT = process.env.PORT || 5000;

//BodyParser Middleware
app.use(bodyParser.json());

//Use Routes
app.use('/api/items', items);
app.listen(PORT, ()=>console.log(`Server listening on PORT ${PORT}`));
