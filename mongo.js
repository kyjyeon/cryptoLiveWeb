const axios = require("axios");
const MongoClient = require('mongodb').MongoClient;
const dbname =  'cryptoNews';
const collec = 'latestNews';
var url = "mongodb://15.164.93.211:27017";

//Insert data into DB
insertDocument = (db, document, collection, callback) =>{
    const coll = db.collection(collection);
    return coll.insert(document);
};

//Storing data into mongodb
MongoClient.connect(url,{ useNewUrlParser: true }).then((client) => {
    console.log('Connected correctly to server');
    const db = client.db(dbname);
    setInterval(()=>{
        axios("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=9d15421656205828b15ff16d5e59a1d3ee25f257d772b58bed765cba82f7bc9d")
        .then(data => {
            Data = data.data.Data;
            Data.forEach(instance => {
                insertDocument(db, instance, collec)
                  .then(result => {
                    console.log("Inserted Document:\n", result);
                  })
                  .catch(err => console.log(err));
            });
          }
        );
    },3600000)
})
.catch((err) => console.log(err));