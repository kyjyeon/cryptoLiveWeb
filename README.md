# cryptoLiveWeb
cryptocurrency live chart providing simple services<br>

Stack<br>
- RDS(MariaDB)<br>
- Node.js
- React.js
- Socket.io
- EC2
<br><br>

Live Chart refreshed every 60 seconds<br><n>
---Process---<n><n>
 1. Request api to crytocompare<n>
 2. Filter the received json data and insert into the applicable table column<n>
 3. Call the latest data from DB and refresh the liveChart using Socket.io<br><br>
 
 EC2 - Used PM2 node package to run the code as background<br>

API Source: www.cryptocompare.com<br>

![live](https://user-images.githubusercontent.com/39256000/63835200-edf28880-c9b1-11e9-89d0-9df5eca0ba37.png)
