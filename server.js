const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const util = require("util");
const app = express();
var coinName =  require("./coinName");
var coinFullName =  require("./coinFullName");
// const realtimeEUR = require("./routes/api/realtimeEUR")
// const realtimeUSD = require("./routes/api/realtimeUSD");
const PORT = 4001;
const server = app.listen(PORT);
const io = require("socket.io").listen(server);

const connection = mysql.createConnection({
    host: "kyjdb.cdzelssaqpcy.ap-northeast-2.rds.amazonaws.com",
    user: "kyjyeon",
    password: "dus900809!",
    database: "coin",
    port: 3400
});

//Query for data connecting DB
//Query functions for realtime data(1month, 24H, 1day, 7day)
const query = util.promisify(connection.query).bind(connection);
getLiveData_7DAY = (coin, currency)=>{
    table = "realtime_" + currency+"_"+coin;
    query("SELECT *"+"FROM "+ table+ " ORDER BY "+ "_ORDER" +" DESC "+ "LIMIT 50400")
    .then((result)=>{
        console.log(result.RowDataPacket);
    })
}
getLiveData_24H = (coin, currency)=>{
    table = "realtime_" + currency+"_"+coin;
    query("SELECT *"+"FROM "+ table+ " ORDER BY "+ "_ORDER" +" DESC "+ "LIMIT 7200")
    .then((result)=>{
        console.log(result.RowDataPacket);
    })
}
getLiveData_1MON = (coin, currency)=>{
    table = "realtime_" + currency+"_"+coin;
    query("SELECT *"+"FROM "+ table+ " ORDER BY "+ "_ORDER" +" DESC "+ "LIMIT 21600")
    .then((result)=>{
        console.log(result.RowDataPacket);
    })
}

    getLiveData = (coin, currency)=>{
        table = "realtime_" + currency+"_"+coin;
        return query("SELECT *"+" FROM "+ table + " ORDER BY "+ "_ORDER" +" DESC "+ "LIMIT 1")
    }
    getHistoryData = (coin, currency) =>{
        query();
    }
    
    loopLiveData = (currency)=>{
        let DataList = []
       forloop= async(currency) =>{
        for (let i = 0; i < 20; ++i) {
          await getLiveData(coinName[i], currency).then(result => {
            DataList.push(result[0]);
            return DataList;
          });
        }
       }
       return new Promise((resolve)=>{
        forloop(currency)
        .then(result=> {return resolve(DataList)})
        .catch(err=>console.log(err));
       })
    }
    
    //Get Data
    // loopLiveData("USD")
    // .then((result)=>{
    //     console.log(result);
    //     return result;
    // });

//console.log(realtimeUSD);
io.on("connection", socket =>{
    console.log("New client connected: " + socket.id);
    // console.log(socket);
    socket.on("realtimedata", interval => {
      console.log("Client on for realtimeData");
      setInterval(() => {
        loopLiveData("USD").then(result => {
          //console.log(result);
          socket.emit("USDrealtime", result);
        });
      }, interval);
    });

    socket.on('error', function (err) {
        console.log('received error from socket:', socket.id);
        console.log(err);
    })
    socket.on("disconnect", ()=>console.log("socket disconnected"));
})

// app.use(bodyParser.json());

//server.listen(PORT, ()=>console.log(`Server listening on PORT ${PORT}`));
