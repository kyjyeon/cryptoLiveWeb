const axios = require("axios");
const mysql = require("mysql");
const util = require("util");

//Function for getting historical data
exports.history_hour = (requestNumber, unixTime, looping, tableName, currency_op, coin) => {
  var requestLimit = requestNumber; //Max 2000
  var table = tableName;
  var loopRepeat = looping;
  let timestamp = unixTime;
  var check = 0;
  var basic_timestamp = unixTime;
  var currency = currency_op;

  var connection = mysql.createConnection({
    host: "kyjdb.cdzelssaqpcy.ap-northeast-2.rds.amazonaws.com",
    user: "kyjyeon",
    password: "",
    database: "coin",
    port: 3400
  })
  
  //Connect to DB
  let connect = () => {
    connection.connect((err) => {
      if (err) throw err;
      console.log(`Connected to mysql...`);
    })
  }

  //Connect to DB and bind the connections into one
  const query = util.promisify(connection.query).bind(connection);

  //Request API
  function getRequest(loop) {
    timestamp = basic_timestamp + ((requestLimit+1) * 3600 * loop);
    return new Promise(resolve => {
        axios.get(`https://min-api.cryptocompare.com/data/histohour?fsym=${coin}&tsym=${currency}&limit=${requestLimit}&aggregate=1&toTs=${timestamp}&api_key=`)
        .then((res) => {
            //Filter result
            dataInput = (i) => {
                var val1 = res.data.Data[i].time;
                var val2 = res.data.Data[i].close;
                var val3 = res.data.Data[i].high;
                var val4 = res.data.Data[i].low;
                var val5 = res.data.Data[i].open;
                var val6 = res.data.Data[i].volumefrom;
                var val7 = res.data.Data[i].volumeto;
                //Insert value into DB table
              try{
                query("INSERT INTO " + table + "(_TIME,_CLOSE,_HIGH,_LOW,_OPEN,_VOLUMEFROM,_VOLUMETO)" + " VALUES(" + val1 + "," + val2 + "," + val3 + "," + val4 + "," + val5 + "," + val6 + "," + val7 + ")", (err) => {
                  if(err){
                    console.log("error");
                  }
                  else {
                    console.log(`${table} ${val1} : ${i} inserted correctly..`);
                    if (i == requestLimit - 1) {
                      console.log("Current Timestamp: " + timestamp + "~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                    }
                  }
                })
              }catch(err){
                if(err instanceof Errors.ER_DUP_ENTRY){
                  console.log("Duplicate entry");
                  connection.end(()=>{
                    console.log("connection ended...........");
                  });
                }
                if(err instanceof ER_DUP_ENTRY){
                  console.log("ER_DUP_ENTRY");
                  connection.end(()=>{
                    console.log("connection ended...........");
                  });
                }
                console.log(err);
              }
            }
          async function inputData() {
            for (let i = 0; i < requestLimit; i++) {
              await dataInput(i);
            }
          }
          inputData();
          resolve();
        });
    })
  }
  //Synchronize execution using 'async'
  async function insertData() {
    for (var i = 0; i < loopRepeat; ++i) {
      await getRequest(i, timestamp);
    };
  }
  insertData();
}
