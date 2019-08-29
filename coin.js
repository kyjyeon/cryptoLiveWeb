let mysql = require("mysql");
const axios = require("axios");
let database_Name = "tomato";
const unirest = require("unirest");
const util = require("util");
const coinName = require("./coinName");
const coinFullName = require("./coinFullName");
const events = require("events");
var eventEmitter = new events.EventEmitter();
USD = "usd";
EUR = "eur";

// eventEmitter.on('realTimeEUR', ()=>{
//   getRealtimeEUR(EUR);
// })

var connection = mysql.createConnection({
  host: "kyjdb.cdzelssaqpcy.ap-northeast-2.rds.amazonaws.com",
  user: "kyjyeon",
  password: "",
  database: "coin",
  port: 3400
})

const query = util.promisify(connection.query).bind(connection);

insertUsdData =(instance, time, currency, order, value) =>{
  let price = value.usd;
  //let price_BTC = ;
  let volume = value.usd_24h_vol;
  let marketCap = value.usd_market_cap;
  //let marketCap_Rank = value.mcr;
  let priceChange24 = value.usd_24h_change;
  table = "realtime_"+"USD"+"_"+ coinName[order];
  //console.log("INSERT INTO " + table + "(_TIME,_PRICE,_BTC_PRICE, _VOLUME, _MARKETCAP, _MARKETCAP_RANK, _PRICE_CHANGE24H)" + " VALUES("+ JSON.stringify(time) + "," + price+ "," + price_BTC+ "," + volume+ "," + marketCap+ "," + marketCap_Rank+ "," + priceChange24+")")
  //console.log(query("INSERT INTO " + table + "(_TIME,_PRICE,_BTC_PRICE, _VOLUME, _MARKETCAP, _MARKETCAP_RANK, _PRICE_CHANGE24H)" + " VALUES("+ JSON.stringify(time) + "," + price+ "," + '"0"'+ "," + volume+ "," + marketCap+ "," + '"0"'+ "," + priceChange24+")"))
  query("INSERT INTO " + table + "(_TIME,_PRICE,_BTC_PRICE, _VOLUME, _MARKETCAP, _MARKETCAP_RANK, _PRICE_CHANGE24H)" + " VALUES("+ JSON.stringify(time) + "," + price+ "," + '"0"'+ "," + volume+ "," + marketCap+ "," + '"0"'+ "," + priceChange24+")", (err,data)=>{
    //console.log(data);
    if(err)throw err;
    console.log(instance + " " + currency + " "+ time + " realtime data inserted.....");
  });
}
insertEurData =(instance, time, currency, order, value) =>{
    //console.log("EUR" + JSON.stringify(value)+ order)
    let price = value.eur;
    //let price_BTC = instance.pb;
    let volume = value.eur_24h_vol;
    let marketCap = value.eur_market_cap;
    //let marketCap_Rank = instance.mcr;
    let priceChange24 = value.eur_24h_change;
    table = "realtime_"+"EUR"+"_"+ coinName[order];
    //console.log("INSERT INTO " + table + "(_TIME,_PRICE,_BTC_PRICE, _VOLUME, _MARKETCAP, _MARKETCAP_RANK, _PRICE_CHANGE24H)" + " VALUES("+ JSON.stringify(time) + "," + price+ "," + price_BTC+ "," + volume+ "," + marketCap+ "," + marketCap_Rank+ "," + priceChange24+")")
    query("INSERT INTO " + table + "(_TIME,_PRICE,_BTC_PRICE, _VOLUME, _MARKETCAP, _MARKETCAP_RANK, _PRICE_CHANGE24H)" + " VALUES("+ JSON.stringify(time) + "," + price+ "," + '"0"'+ "," + volume+ "," + marketCap+ "," + '"0"'+ "," + priceChange24+")", (err,data)=>{
        if(err)throw err;
      console.log(instance + " " + currency + " "+ time + " realtime data inserted.....");
    });
  }

getRealtime = (USD, EUR) => {
  setInterval(() => {
    axios("https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Clitecoin%2Ccardano%2Ceos%2Cripple%2Ciota%2Cstellar%2Cneo%2Cmonero%2Ctron%2Ctether%2Cvechain%2Cquantum%2Czcash%2Cdash%2Cmaker%2Cbinancecoin%2Cbitcoin-cash%2Cethereum-classic&vs_currencies=usd%2Ceur&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true")
      .then((result)=> {
        output = result.data;
        let today = new Date();
        time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let timestamp = date + " " + time;
            for(instance in output){
            if(instance == "binancecoin"){
                let value = output[instance];
                insertUsdData(instance,timestamp, USD,19, value);
                insertEurData(instance,timestamp, EUR,19, value)
            }
            if (instance == "bitcoin"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,0, value);
                insertEurData(instance, timestamp, EUR,0, value)
            }
            if (instance == "bitcoin-cash"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,3, value);
                insertEurData(instance, timestamp, EUR,3, value)
            }
            if (instance == "cardano"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,6, value);
                insertEurData(instance, timestamp, EUR,6, value)
            }
            if (instance == "dash"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,12, value);
                insertEurData(instance, timestamp, EUR,12, value)
            }
            if (instance == "eos"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,5, value);
                insertEurData(instance, timestamp, EUR,5, value)
            }
            if (instance == "ethereum"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,1, value);
                insertEurData(instance, timestamp, EUR,1, value)
            }
            if (instance == "iota"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,8, value);
                insertEurData(instance, timestamp, EUR,8, value)
            }
            if (instance == "litecoin"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,4, value);
                insertEurData(instance, timestamp, EUR,4, value)
            }
            if (instance == "maker"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,17, value);
                insertEurData(instance, timestamp, EUR,17, value)
            }
            if (instance == "monero"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,10, value);
                insertEurData(instance, timestamp, EUR,10, value)
            }
            if (instance == "neo"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,9, value);
                insertEurData(instance, timestamp, EUR,9, value)
            }
            if (instance == "quantum"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,18, value);
                insertEurData(instance, timestamp, EUR,18, value)
            }
            if (instance == "ripple"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,2, value);
                insertEurData(instance, timestamp, EUR,2, value)
            }
            if (instance == "stellar"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,7, value);
                insertEurData(instance, timestamp, EUR,7, value)
            }
            if (instance == "tether"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,14, value);
                insertEurData(instance, timestamp, EUR,14, value)
            }
            if (instance == "tron"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,13, value);
                insertEurData(instance, timestamp, EUR,13, value)
            }
            if (instance == "vechain"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,15, value);
                insertEurData(instance, timestamp, EUR,15, value)
            }
            if (instance == "zcash"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,11, value);
                insertEurData(instance, timestamp, EUR,11, value)
            }
            if (instance == "ethereum-classic"){
                let value = output[instance];
                insertUsdData(instance, timestamp, USD,16, value);
                insertEurData(instance, timestamp, EUR,16, value)
            }
        }
      })
  },1000)
}

// getRealtimeEUR = (EUR)=>{
//   setInterval(() => {
//       axios("https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Clitecoin%2Ccardano%2Ceos%2Cripple%2Ciota%2Cstellar%2Cneo%2Cmonero%2Ctron%2Ctether%2Cvechain%2Cquantum%2Czcash%2Cdash%2Cmaker%2Cbinancecoin%2Cbitcoin-cash%2Cethereum-classic&vs_currencies=usd%2Ceur&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true")
//       .then((result)=> {
//         //console.log(result.status, result.headers, result.body.detail.data[10]);
//         list = result.data;
//           let today = new Date();
//           time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//           let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//           let timestamp = date + " " + time;
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[1])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[2])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[3])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[4])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[5])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[6])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[7])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[8])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[9])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[10])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[11])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[12])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[13])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[14])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[15])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[16])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[17])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[18])
//             insertEurData(instance, timestamp, EUR);
//           if (instance == coinFullName[19])
//             insertEurData(instance, timestamp, EUR);
//         })
//       })
//   },12000)
// }
eventEmitter.on('realTime', ()=>{
    console.log('realtime event on');
  getRealtime(USD, EUR);
})

  eventEmitter.emit('realTime');
  // eventEmitter.emit('realTimeEUR');


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
