import React from "react";
import { Table } from "reactstrap";

var coinName =  require("../../../coinName");
var coinFullName =  require("../../../coinFullName");
const io = require('socket.io-client');
const socket = io('http://15.164.93.211:3000');
//import {socket} from "./AppNavbar";
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class table extends React.Component{

  toggle = this.toggle.bind(this);
  toggle1 = this.toggle1.bind(this);
  toggle2 = this.toggle2.bind(this);
  toggle3 = this.toggle3.bind(this);
  toggle4 = this.toggle4.bind(this);
  toggle5 = this.toggle5.bind(this);
  state ={
    collapse: false,
    collapse1: false,
    collapse2: false,
    collapse3: false,
    collapse4: false,
    collapse5: false,
    Price : 0,
    Time: 0,
    Volume: 0,
    MarketCapital: 0,
    PriceChange: 0,
    Date: 0,
    Realtime: 0,
    a:[],
    b:[],
    c:[],
    d:[],
    e:[],
    tdstyle_24h0: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h1: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h2: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h3: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h4: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h5: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h6: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h7: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h8: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h9: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h10: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h11: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h12: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h13: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h14: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h15: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h16: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h17: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h18: {fontSize: "x-large", textAlign:"center"},
    tdstyle_24h19: {fontSize: "x-large", textAlign:"center"}
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  toggle1() {
    this.setState(state => ({ collapse1: !state.collapse1 }));
  }
  toggle2() {
    this.setState(state => ({ collapse2: !state.collapse2 }));
  }
  toggle3() {
    this.setState(state => ({ collapse3: !state.collapse3 }));
  }
  toggle4() {
    this.setState(state => ({ collapse4: !state.collapse4 }));
  }
  toggle5() {
    this.setState(state => ({ collapse5: !state.collapse5 }));
  }

  realtimedata = ()=>{
    socket.on('USDrealtime',(data)=>{
      console.log("realtimedata socket.on called");
      console.log(data);
          data.forEach(instance => {
          this.state.a.push(instance._PRICE.toLocaleString());
          this.state.b.push(instance._TIME);
          this.state.c.push(instance._VOLUME.toLocaleString());
          this.state.d.push(instance._MARKETCAP.toLocaleString());
          this.state.e.push(instance._PRICE_CHANGE24H);
        })
        // .then(data => {
          this.setState({ Time: this.state.b });
          this.setState({ Price: this.state.a });
          this.setState({ Volume: this.state.c });
          this.setState({ MarketCapital: this.state.d });
          this.setState({ PriceChange: this.state.e });
          this.setState({Date: this.state.Time[0].slice(0,10)});
          this.setState({Realtime: this.state.Time[0].slice(11,19)})
      
          if(this.state.PriceChange[0] > 0){
            this.setState({tdstyle_24h0 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[0] <0){
            this.setState({tdstyle_24h0 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[1] > 0){
            this.setState({tdstyle_24h1 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[1] <0){
            this.setState({tdstyle_24h1 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[2] > 0){
            this.setState({tdstyle_24h2 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[2] <0){
            this.setState({tdstyle_24h2 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[3] > 0){
            this.setState({tdstyle_24h3 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[3] <0){
            this.setState({tdstyle_24h3 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[4] > 0){
            this.setState({tdstyle_24h4 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[4] <0){
            this.setState({tdstyle_24h4 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[5] > 0){
            this.setState({tdstyle_24h5 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[5] <0){
            this.setState({tdstyle_24h5 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[6] > 0){
            this.setState({tdstyle_24h6 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[6] <0){
            this.setState({tdstyle_24h6 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[7] > 0){
            this.setState({tdstyle_24h7 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[7] <0){
            this.setState({tdstyle_24h7 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[8] > 0){
            this.setState({tdstyle_24h8 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[8] <0){
            this.setState({tdstyle_24h8 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[9] > 0){
            this.setState({tdstyle_24h9 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[9] <0){
            this.setState({tdstyle_24h9 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[10] > 0){
            this.setState({tdstyle_24h10 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[10] <0){
            this.setState({tdstyle_24h10 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[11] > 0){
            this.setState({tdstyle_24h11 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[11] <0){
            this.setState({tdstyle_24h11 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[12] > 0){
            this.setState({tdstyle_24h12 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[12] <0){
            this.setState({tdstyle_24h12 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[13] > 0){
            this.setState({tdstyle_24h13 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[13] <0){
            this.setState({tdstyle_24h13 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[14] > 0){
            this.setState({tdstyle_24h14 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[14] <0){
            this.setState({tdstyle_24h14 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[15] > 0){
            this.setState({tdstyle_24h15 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[15] <0){
            this.setState({tdstyle_24h15 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[16] > 0){
            this.setState({tdstyle_24h16 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[16] <0){
            this.setState({tdstyle_24h16 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[17] > 0){
            this.setState({tdstyle_24h17 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[17] <0){
            this.setState({tdstyle_24h17 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          if(this.state.PriceChange[18] > 0){
            this.setState({tdstyle_24h18 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[18] <0){
            this.setState({tdstyle_24h18 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[18] ===0){
            this.setState({tdstyle_24h18 : {fontSize: "x-large", textAlign:"center", backgroundColor:"skyblue", color:"aliceblue"}});
          }
          if(this.state.PriceChange[19] > 0){
            this.setState({tdstyle_24h19 : {fontSize: "x-large", textAlign:"center", backgroundColor:"green", color:"aliceblue"}});
          }
          else if(this.state.PriceChange[19] <0){
            this.setState({tdstyle_24h19 : {fontSize: "x-large", textAlign:"center", backgroundColor:"red", color:"aliceblue"}});
          }
          
          this.setState({ a: [] });
          this.setState({ b: [] });
          this.setState({ c: [] });
          this.setState({ d: [] });
          this.setState({ e: [] });
        //   .catch(err =>
        //     console.error(err)
        //   );
        // });
    });
    socket.emit('realtimedata',1000)
  }

  // getData = () => {
  //     fetch("/api/realtimeUSD")
  //     .then(res => res.json())
  //     .then(data=>{
  //       data.forEach((instance)=>{
  //         this.state.a.push(instance._PRICE.toLocaleString())
  //         this.state.b.push(instance._BTC_PRICE)
  //         this.state.c.push(instance._VOLUME.toLocaleString())
  //         this.state.d.push(instance._MARKETCAP.toLocaleString())
  //         this.state.e.push(instance._PRICE_CHANGE24H)
  //       })
  //         return data;
  //       })
  //     .then((data)=>{
  //       this.setState({Price: this.state.a})
  //       this.setState({BTC_Price: this.state.b})
  //       this.setState({Volume: this.state.c})
  //       this.setState({MarketCapital: this.state.d})
  //       this.setState({PriceChange: this.state.e})
  //     .catch(err => console.error(err));
  //     });
  // }

  componentDidMount() {
    this.realtimedata();
  }

  render(){
    const tdstyle=  {fontSize: "x-large", textAlign:"center"}
  return (
    <div className="tableUSD"
    style={{
      backgroundColor:"ivory",
      borderStyle: "solid",
    borderColor: "crimson",
    borderTop: "hidden",
    borderLeft:"hidden"
    }}
    >
      <Table bordered>
        <thead>
          <tr>
          <td colSpan="6" 
          style={{borderBottomWidth: "initial",
          borderBottomColor: "crimson",
          fontSize: "x-large",
          color: "black",
          padding: "6px", textAlign:"end", fontWeight:"bold",}}
          ><center style={{borderBottomWidth: "initial",
          borderBottomColor: "crimson",
          fontSize: "xx-large",
          color: "darkgreen", 
          fontWeight:"bold",
          }}>TOP 20 Coin LiveChart</center>UTC : {this.state.Realtime}</td>
          </tr>
          <tr>
            <th><Button color="primary" onClick={this.toggle} style={{ margin: '1rem', textAlign:"center", backgroundColor: "cornflowerblue", color:"white", borderColor:"white", fontWeight:"bold" }}>Coin</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Abbreviation of the Coin
            </CardBody>
          </Card>
        </Collapse></th>
            <th>
              <Button color="primary" onClick={this.toggle1} style={{ margin: '1rem', textAlign:"center", backgroundColor: "cornflowerblue", color:"white", borderColor:"white", fontWeight:"bold"}}>Fullname</Button>
        <Collapse isOpen={this.state.collapse1}>
          <Card>
            <CardBody>
            Full name of the Coin
            </CardBody>
          </Card>
        </Collapse>
        </th>
            <th>
              <Button color="primary" onClick={this.toggle2} style={{ margin: '1rem', textAlign:"center", backgroundColor: "cornflowerblue", color:"white", borderColor:"white", fontWeight:"bold"}}>Price</Button>
        <Collapse isOpen={this.state.collapse2}>
          <Card>
            <CardBody>
            Current Price of the Coin
            </CardBody>
          </Card>
        </Collapse>
        </th>
            <th>
              <Button color="primary" onClick={this.toggle3} style={{ margin: '1rem', textAlign:"center", backgroundColor: "cornflowerblue", color:"white", borderColor:"white", fontWeight:"bold"}}>Volume</Button>
        <Collapse isOpen={this.state.collapse3}>
          <Card>
            <CardBody>
            The number of shares traded on the day. If volumes are high, this means that there are a lot of shares being traded of the particular company
            </CardBody>
          </Card>
        </Collapse>
        </th>
            <th>
              <Button color="primary" onClick={this.toggle4} style={{ margin: '1rem', textAlign:"center", backgroundColor: "cornflowerblue", color:"white", borderColor:"white", fontWeight:"bold"}}>Market Capital</Button>
        <Collapse isOpen={this.state.collapse4}>
          <Card>
            <CardBody>
            The total market value of the shares outstanding of a publicly traded company. Equal to the share price times the number of shares outstanding
            </CardBody>
          </Card>
        </Collapse>
        </th>
            <th>
              <Button color="primary" onClick={this.toggle5} style={{ margin: '1rem', textAlign:"center", backgroundColor: "cornflowerblue", color:"white", borderColor:"white", fontWeight:"bold"}}>Price Change 24H</Button>
        <Collapse isOpen={this.state.collapse5}>
          <Card>
            <CardBody>
            Price change percentage for the last 24 hours
            </CardBody>
          </Card>
        </Collapse>
        </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{coinName[0]}&ensp; <img src="https://www.cryptocompare.com/media/19633/btc.png" height="30" width="30"></img></th>
            <td>{coinFullName[0]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[0]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[0]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[0]}</td>
            <td style={this.state.tdstyle_24h0}>{this.state.PriceChange[0] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[1]}&ensp; <img src="https://www.cryptocompare.com/media/20646/eth_logo.png" height="30" width="30"></img></th>
            <td>{coinFullName[1]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[1]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[1]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[1]}</td>
            <td style={this.state.tdstyle_24h1}>{this.state.PriceChange[1] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[2]}&ensp; <img src="https://www.cryptocompare.com/media/34477776/xrp.png" height="30" width="30"></img></th>
            <td>{coinFullName[2]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[2]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[2]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[2]}</td>
            <td style={this.state.tdstyle_24h2}>{this.state.PriceChange[2] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[3]}&ensp; <img src="https://www.cryptocompare.com/media/35650680/bch.png" height="30" width="30"></img></th>
            <td>{coinFullName[3]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[3]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[3]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[3]}</td>
            <td style={this.state.tdstyle_24h3}>{this.state.PriceChange[3] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[4]}&ensp; <img src="https://www.cryptocompare.com/media/35309662/ltc.png" height="30" width="30"></img></th>
            <td>{coinFullName[4]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[4]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[4]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[4]}</td>
            <td style={this.state.tdstyle_24h4}>{this.state.PriceChange[4] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[5]}&ensp; <img src="https://www.cryptocompare.com/media/1383652/eos_1.png" height="30" width="30"></img></th>
            <td>{coinFullName[5]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[5]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[5]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[5]}</td>
            <td style={this.state.tdstyle_24h5}>{this.state.PriceChange[5] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[6]}&ensp; <img src="https://www.cryptocompare.com/media/12318177/ada.png" height="30" width="30"></img></th>
            <td>{coinFullName[6]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[6]}</td>   
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[6]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[6]}</td>
            <td style={this.state.tdstyle_24h6}>{this.state.PriceChange[6] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[7]}&ensp; <img src="https://www.cryptocompare.com/media/35521289/xlm.png" height="30" width="30"></img></th>
            <td>{coinFullName[7]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[7]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[7]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[7]}</td>
            <td style={this.state.tdstyle_24h7}>{this.state.PriceChange[7] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[8]}&ensp; <img src="https://www.cryptocompare.com/media/1383540/iota_logo.png" height="30" width="30"></img></th>
            <td>{coinFullName[8]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[8]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[8]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[8]}</td>
            <td style={this.state.tdstyle_24h8}>{this.state.PriceChange[8] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[9]}&ensp; <img src="https://www.cryptocompare.com/media/1383858/neo.jpg" height="30" width="30"></img></th>
            <td>{coinFullName[9]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[9]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[9]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[9]}</td>
            <td style={this.state.tdstyle_24h9}>{this.state.PriceChange[9] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[10]}&ensp; <img src="https://www.cryptocompare.com/media/19969/xmr.png" height="30" width="30"></img></th>
            <td>{coinFullName[10]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[10]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[10]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[10]}</td>
            <td style={this.state.tdstyle_24h10}>{this.state.PriceChange[10] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[11]}&ensp; <img src="https://www.cryptocompare.com/media/351360/zec.png" height="30" width="30"></img></th>
            <td>{coinFullName[11]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[11]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[11]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[11]}</td>
            <td style={this.state.tdstyle_24h11}>{this.state.PriceChange[11] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[12]}&ensp; <img src="https://www.cryptocompare.com/media/33842920/dash.png" height="30" width="30"></img></th>
            <td>{coinFullName[12]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[12]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[12]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[12]}</td>
            <td style={this.state.tdstyle_24h12}>{this.state.PriceChange[12] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[13]}&ensp; <img src="https://www.cryptocompare.com/media/34477805/trx.jpg" height="30" width="30"></img></th>
            <td>{coinFullName[13]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[13]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[13]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[13]}</td>
            <td style={this.state.tdstyle_24h13}>{this.state.PriceChange[13] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[14]}&ensp; <img src="https://www.cryptocompare.com/media/1383672/usdt.png" height="30" width="30"></img></th>
            <td>{coinFullName[14]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[14]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[14]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[14]}</td>
            <td style={this.state.tdstyle_24h14}>{this.state.PriceChange[14] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[15]}&ensp; <img src="https://www.cryptocompare.com/media/12318129/ven.png" height="30" width="30"></img></th>
            <td>{coinFullName[15]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[15]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[15]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[15]}</td>
            <td style={this.state.tdstyle_24h15}>{this.state.PriceChange[15] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[16]}&ensp; <img src="https://www.cryptocompare.com/media/33752295/etc_new.png" height="30" width="30"></img></th>
            <td>{coinFullName[16]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[16]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[16]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[16]}</td>
            <td style={this.state.tdstyle_24h16}>{this.state.PriceChange[16] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[17]}&ensp; <img src="https://old.coinlist.me/wp-content/uploads/2018/03/maker-mkr-coin.png" height="30" width="30"></img></th>
            <td>{coinFullName[17]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[17]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[17]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[17]}</td>
            <td style={this.state.tdstyle_24h17}>{this.state.PriceChange[17] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[18]}&ensp; <img src="https://www.cryptocompare.com/media/1383382/qtum.png" height="30" width="30"></img></th>
            <td>{coinFullName[18]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[18]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[18]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[18]}</td>
            <td style={this.state.tdstyle_24h18}>{this.state.PriceChange[18] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[19]}&ensp; <img src="https://www.cryptocompare.com/media/1383947/bnb.png" height="30" width="30"></img></th>
            <td>{coinFullName[19]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Price[19]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.Volume[19]}</td>
            <td style={tdstyle}><b>$</b>&nbsp;{this.state.MarketCapital[19]}</td>
            <td style={this.state.tdstyle_24h19}>{this.state.PriceChange[19] + "%"}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
  }
}