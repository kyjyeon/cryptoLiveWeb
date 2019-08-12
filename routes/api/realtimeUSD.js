const express = require("express");
const mysql = require("mysql");
const Item = require("../../models/Items");
const util = require("util");
const router = express.Router();
const coinName = require("../../coinName");

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

<<<<<<< HEAD:routes/api/realtimeUSD.js

loopLiveData = (currency)=>{
    let DataList = []
   forloop= async(currency) =>{
    for(let i=0;i<20; ++i){
        await getLiveData(coinName[i], currency)
=======
//Get Data, loop for wanted data from DB and send it to server
router.get('/', (req,res)=>{
    for(let i=0;i<10; ++i){
        getLiveData(coinName[i], "USD")
>>>>>>> 1e0fb8c62f1aaef954c51abb2bb3d740736c65b3:routes/api/items.js
        .then((result)=>{
            DataList.push(result[0]);
            return DataList;
        })
    }
   }
   return new Promise(resolve => {
     forloop(currency)
       .then(result => {
         return resolve(DataList);
       })
       .catch(err => console.err(err));
   });
}

//Get Data
loopLiveData("USD")
.then((result)=>{
return result;
});

module.exports = router;
