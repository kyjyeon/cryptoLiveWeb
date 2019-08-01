const mysql = require("mysql");
const util = require("util");
module.exports = {
    connection = mysql.createConnection({
        host: "kyjdb.cdzelssaqpcy.ap-northeast-2.rds.amazonaws.com",
        user: "kyjyeon",
        password: "",
        database: "coin",
        port: 3400
    }),
    query = util.promisify(connection.query).bind(connection)
}