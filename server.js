const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const util = require("util");
const realtimeEUR = require("./routes/api/realtimeEUR");
const realtimeUSD = require("./routes/api/realtimeUSD");
const socketIO = require("socket.io");
const app = express();
const http = require("http");
const connection = mysql.createConnection({
    host: "kyjdb.cdzelssaqpcy.ap-northeast-2.rds.amazonaws.com",
    user: "kyjyeon",
    password: "dus900809!",
    database: "coin",
    port: 3400
});
const socketJS = require("./routes/socket");
const query = util.promisify(connection.query).bind(connection);
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);
//BodyParser Middleware
io.on("connection", socket =>{
    console.log("New client connected: " + socket.id);
    //console.log(socket)
    socket.emit("realtimedata", socketJS);
    socket.on("disconnect", ()=>console.log("Client disconnected"));
})

// app.use(bodyParser.json());

// //Use Routes
// app.use('/api/realtimeEUR', realtimeEUR);
// app.use('/api/realtimeUSD', realtimeUSD)

server.listen(PORT, ()=>console.log(`Server listening on PORT ${PORT}`));
