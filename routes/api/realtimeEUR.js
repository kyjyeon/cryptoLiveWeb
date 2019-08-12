const express = require("express");
const mysql = require("mysql");
//const Item = require("../../models/Items");
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
    var DataList = []
   forloop= async(currency) =>{
    for(let i=0;i<20; ++i){
        await getLiveData(coinName[i], currency)
        .then((result)=>{
            DataList.push(result[0]);
            return DataList;
        })
    }
   }
   return new Promise((resolve)=>{
    forloop(currency)
    .then(result=> {return resolve(DataList)})
    .catch(err=>console.err(err));
   })
}

//Get Data
loopLiveData("EUR")
.then((result)=>{
return result;
});


module.exports = router;
