//Code for implementing data into DB using multiple event calling for faster insertion
//Module Import
const axios = require("axios");
const mysql = require("mysql");
var events = require('events');
const unirest = require("unirest");
const hr_history = require("./hr_history");
const util = require("util");

startTime = 1375934400;
var eventEmitter = new events.EventEmitter();

//Top 10 cryptocoin list
const coin1 = "BTC"; //Bitcoin
const coin2 = "ETH"; //Etherium
const coin3 = "XRP"; // XRP
const coin4 = "LTC"; //Litecoin
const coin5 = "BCH"; //Bitcoin cash
const coin6 = "BNB"; //Binance coin
const coin7 = "EOS"; //EOS
const coin8 = "USDT";// Tether
const coin9 = "BSV"; // Bitcoin SV
const coin10 = "XLM"; //Stellar

ohlcvOn = ( coin ) => {

  event_KRW = "hr_ohlcv_KRW"+"_"+ coin;
  event_USD = "hr_ohlcv_USD"+"_"+ coin;
  event_JPY = "hr_ohlcv_JPY"+"_"+ coin;
  event_EUR = "hr_ohlcv_EUR"+"_"+ coin;
  event_CNY = "hr_ohlcv_CNY"+"_"+ coin;
  event_RUB = "hr_ohlcv_RUB"+"_"+ coin;
  event_HKD = "hr_ohlcv_HKD"+"_"+ coin;

  eventEmitter.on(event_KRW, (requestNumber, unixTime, looping, tableName, currency, coin) => {
    console.log(event_KRW + " event on.......");
    hr_history.history_hour(requestNumber, unixTime, looping, tableName, currency, coin);
  })
  eventEmitter.on(event_USD, (requestNumber, unixTime, looping, tableName, currency, coin) => {
    console.log(event_USD + " event on.......");
    hr_history.history_hour(requestNumber, unixTime, looping, tableName, currency, coin);
  })
  eventEmitter.on(event_JPY, (requestNumber, unixTime, looping, tableName, currency, coin) => {
    console.log(event_JPY + " event on.......");
    hr_history.history_hour(requestNumber, unixTime, looping, tableName, currency, coin);
  })
  eventEmitter.on(event_EUR, (requestNumber, unixTime, looping, tableName, currency, coin) => {
    console.log(event_EUR + " event on.......");
    hr_history.history_hour(requestNumber, unixTime, looping, tableName, currency, coin);
  })
  eventEmitter.on(event_CNY, (requestNumber, unixTime, looping, tableName, currency, coin) => {
    console.log(event_CNY + " event on.......");
    hr_history.history_hour(requestNumber, unixTime, looping, tableName, currency, coin);
  })
  eventEmitter.on(event_RUB, (requestNumber, unixTime, looping, tableName, currency, coin) => {
    console.log(event_RUB + " event on.......");
    hr_history.history_hour(requestNumber, unixTime, looping, tableName, currency, coin);
  })
  eventEmitter.on(event_HKD, (requestNumber, unixTime, looping, tableName, currency, coin) => {
    console.log(event_HKD + " event on.......");
    hr_history.history_hour(requestNumber, unixTime, looping, tableName, currency, coin);
  })

  eventEmitter.emit(event_USD, 400, startTime, 215, event_USD, "USD", coin);
  eventEmitter.emit(event_EUR, 400, startTime, 215, event_EUR, "EUR", coin);
  eventEmitter.emit(event_CNY, 400, startTime, 215, event_CNY, "CNY", coin);
  eventEmitter.emit(event_JPY, 400, startTime, 215, event_JPY, "JPY", coin);
  eventEmitter.emit(event_HKD, 400, startTime, 215, event_HKD, "HKD", coin);
  eventEmitter.emit(event_KRW, 400, startTime, 215, event_KRW, "KRW", coin);
  eventEmitter.emit(event_RUB, 400, startTime, 215, event_RUB, "RUB", coin);
}

// ohlcvOn("BGG");
// ohlcvOn("DASH");
// ohlcvOn("ETC");
// ohlcvOn("TRX");
// ohlcvOn("OKB");
// ohlcvOn("TUSD")
// ohlcvOn("ZEC");
// ohlcvOn("ONT");
//ohlcvOn("XMR");
