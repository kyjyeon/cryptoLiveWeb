let socket = require("socket.io-client")("http://127.0.0.1:3000")
let realtimeUSD = require("./api/realtimeUSD");
let realtimeEUR = require("./api/realtimeEUR");

//Simulating reading data every 100 milliseconds
setInterval(function () {
    socket.emit('realtimeUSD', realtimeUSD);
    socket.emit('realtimeEUR', realtimeEUR);
}, 10000);