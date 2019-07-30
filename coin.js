let mysql = require("mysql");
const axios = require("axios");
let database_Name = "tomato";
const unirest = require("unirest");
const util = require("util");
const coinName = require("./coinName");
const coinFullName = require("./coinFullName");
const events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on('realTimeUSD', ()=>{
  getRealtimeUSD(USD);
})
eventEmitter.on('realTimeEUR', ()=>{
  getRealtimeEUR(EUR);
})

var connection = mysql.createConnection({
  host: "kyjdb.cdzelssaqpcy.ap-northeast-2.rds.amazonaws.com",
  user: "kyjyeon",
  password: "",
  database: "coin",
  port: 3400
})

const query = util.promisify(connection.query).bind(connection);
// axios.get('https://min-api.cryptocompare.com/data/histohour?fsym=ETH&tsym=BTC&limit=10&aggregate=1&toTs=1562669773&api_key=')
// .then((res) =>{
//   console.log(res.data);
// })

USD = "USD";
EUR = "EUR";

insertData =(instance, time, currency) =>{
  let price = instance.p;
  let price_BTC = instance.pb;
  let volume = instance.v;
  let marketCap = instance.mc;
  let marketCap_Rank = instance.mcr;
  let priceChange24 = instance.ch;
  table = "realtime_"+currency+"_"+ instance.s;
  //console.log("INSERT INTO " + table + "(_TIME,_PRICE,_BTC_PRICE, _VOLUME, _MARKETCAP, _MARKETCAP_RANK, _PRICE_CHANGE24H)" + " VALUES("+ JSON.stringify(time) + "," + price+ "," + price_BTC+ "," + volume+ "," + marketCap+ "," + marketCap_Rank+ "," + priceChange24+")")
  query("INSERT INTO " + table + "(_TIME,_PRICE,_BTC_PRICE, _VOLUME, _MARKETCAP, _MARKETCAP_RANK, _PRICE_CHANGE24H)" + " VALUES("+ JSON.stringify(time) + "," + price+ "," + price_BTC+ "," + volume+ "," + marketCap+ "," + marketCap_Rank+ "," + priceChange24+")", (err)=>{
    if(err)throw err;
    console.log(instance.s + " " + currency + " "+ time + " realtime data inserted.....");
  });
}

getRealtimeUSD = (USD) => {
  setInterval(() => {
    unirest.post("https://arses-crypto.p.rapidapi.com/getRealTimeRateAll/USD")
      .header("X-RapidAPI-Host", "arses-crypto.p.rapidapi.com")
      .header("X-RapidAPI-Key", "")
      .header("Content-Type", "application/x-www-form-urlencoded")
      .end(function (result) {
        //console.log(result.status, result.headers, result.body.detail.data[10]);
        list = result.body.detail.data.slice(0, 80);
        singleData = result.body.detail.data;
        let today = new Date();
        time = today.getHours() - 9 + ":" + today.getMinutes() + ":" + today.getSeconds();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let timestamp = date + " " + time;
        list.forEach((instance) => {
          if (instance.s == coinName[0])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[1])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[2])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[3])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[4])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[5])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[6])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[7])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[8])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[9])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[10])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[11])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[12])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[13])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[14])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[15])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[16])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[17])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[18])
            insertData(instance, timestamp, USD);
          if (instance.s == coinName[19])
            insertData(instance, timestamp, USD);
        })
      })
  },12000)
}

getRealtimeEUR = (EUR)=>{
  setInterval(() => {
    unirest.post("https://arses-crypto.p.rapidapi.com/getRealTimeRateAll/USD")
      .header("X-RapidAPI-Host", "arses-crypto.p.rapidapi.com")
      .header("X-RapidAPI-Key", "")
      .header("Content-Type", "application/x-www-form-urlencoded")
      .end(function (result) {
        //console.log(result.status, result.headers, result.body.detail.data[10]);
        list = result.body.detail.data.slice(0, 80);
        list.forEach((instance) => {
          let today = new Date();
          time = today.getHours() - 9 + ":" + today.getMinutes() + ":" + today.getSeconds();
          let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
          let timestamp = date + " " + time;
          if (instance.s == coinName[0])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[1])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[2])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[3])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[4])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[5])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[6])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[7])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[8])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[9])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[10])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[11])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[12])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[13])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[14])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[15])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[16])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[17])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[18])
            insertData(instance, timestamp, EUR);
          if (instance.s == coinName[19])
            insertData(instance, timestamp, EUR);
        })
      })
  },12000)
}

  eventEmitter.emit('realTimeUSD');
  eventEmitter.emit('realTimeEUR');

  // setTimeout(()=>{
  //   getRealtimeUSD(USD);
  //   getRealtimeEUR(EUR);
  // },12000)

 // query("INSERT INTO " + table + "(_TIME,_PRICE,_BTC_PRICE, _VOLUME, _MARKETCAP, _MARKETCAP_RANK, _PRICE_CHANGE24H)" + " VALUES(" +"'2019-7-29 16:45:19',0.30962864517301,0.000032303409812584,533369000,13040529847.079,3,-0.44"+")");

// // axios.get("https://min-api.cryptocompare.com/data/top/totalvol?limit=50&tsym=USD&api_key=9d15421656205828b15ff16d5e59a1d3ee25f257d772b58bed765cba82f7bc9d")
// // .then(res=>{
// //     res.data.Data.slice(0,50).forEach(element => {
// //         console.log(JSON.stringify(element.CoinInfo.Name));
// //     });
// //     //console.log(JSON.stringify(res.data.Data.slice(0,49)));
// // })


  // unirest.post("https://arses-crypto.p.rapidapi.com/getRealTimeRateAll/USD")
  // .header("X-RapidAPI-Host", "arses-crypto.p.rapidapi.com")
  // .header("X-RapidAPI-Key", "3880c8b8a7msh40587cbfe91f3ecp1f991bjsn1267a9f9de47")
  // .header("Content-Type", "application/x-www-form-urlencoded")
  // .end(function (result) {
  //     list = result.body.detail.data.slice(0, 10);
  //     singleData = result.body.detail.data;
  //     list.forEach((d)=>{
  //       console.log(d.n);
  //     })
  // })
