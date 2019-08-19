import React from "react";
import { Table } from "reactstrap";
var coinName =  require("../../../coinName");
var coinFullName =  require("../../../coinFullName");
const io = require('socket.io-client');
const socket = io('http://localhost:3000');
//import {socket} from "./AppNavbar";

export default class table extends React.Component{
  state ={
    Price : 0,
    BTC_Price: 0,
    Volume: 0,
    MarketCapital: 0,
    PriceChange: 0,
    a:[],
    b:[],
    c:[],
    d:[],
    e:[]
  }
  realtimedata = ()=>{
    socket.on('USDrealtime',(data)=>{
      console.log("realtimedata socket.on called");
      console.log(data);
          data.forEach(instance => {
          this.state.a.push(instance._PRICE.toLocaleString());
          this.state.b.push(instance._BTC_PRICE);
          this.state.c.push(instance._VOLUME.toLocaleString());
          this.state.d.push(instance._MARKETCAP.toLocaleString());
          this.state.e.push(instance._PRICE_CHANGE24H);
        })
      
        // // .then(data => {
          this.setState({ Price: this.state.a });
          this.setState({ BTC_Price: this.state.b });
          this.setState({ Volume: this.state.c });
          this.setState({ MarketCapital: this.state.d });
          this.setState({ PriceChange: this.state.e })

          this.setState({ a: [] });
          this.setState({ b: [] });
          this.setState({ c: [] });
          this.setState({ d: [] });
          this.setState({ e: [] })
        //   .catch(err =>
        //     console.error(err)
        //   );
        // });
    });
    socket.emit('realtimedata',12000)
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
  // componentWillUnmount() {
  //   socket.off("USDrealtime");
  // }
  render(){
  return (
    <div className="tableUSD"
    style={{
      backgroundColor:"ivory"
    }}
    >
      <Table bordered>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Fullname</th>
            <th>Price</th>
            <th>BTC Price</th>
            <th>Volume</th>
            <th>Marketcap</th>
            <th>Price Change 24H</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{coinName[0]}</th>
            <td>{coinFullName[0]}</td>
            <td>{this.state.Price[0]}</td>
            <td>{this.state.BTC_Price[0]}</td>
            <td>{this.state.Volume[0]}</td>
            <td>{this.state.MarketCapital[0]}</td>
            <td>{this.state.PriceChange[0] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[1]}</th>
            <td>{coinFullName[1]}</td>
            <td>{this.state.Price[1]}</td>
            <td>{this.state.BTC_Price[1]}</td>
            <td>{this.state.Volume[1]}</td>
            <td>{this.state.MarketCapital[1]}</td>
            <td>{this.state.PriceChange[1] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[2]}</th>
            <td>{coinFullName[2]}</td>
            <td>{this.state.Price[2]}</td>
            <td>{this.state.BTC_Price[2]}</td>
            <td>{this.state.Volume[2]}</td>
            <td>{this.state.MarketCapital[2]}</td>
            <td>{this.state.PriceChange[2] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[3]}</th>
            <td>{coinFullName[3]}</td>
            <td>{this.state.Price[3]}</td>
            <td>{this.state.BTC_Price[3]}</td>
            <td>{this.state.Volume[3]}</td>
            <td>{this.state.MarketCapital[3]}</td>
            <td>{this.state.PriceChange[3] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[4]}</th>
            <td>{coinFullName[4]}</td>
            <td>{this.state.Price[4]}</td>
            <td>{this.state.BTC_Price[4]}</td>
            <td>{this.state.Volume[4]}</td>
            <td>{this.state.MarketCapital[4]}</td>
            <td>{this.state.PriceChange[4] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[5]}</th>
            <td>{coinFullName[5]}</td>
            <td>{this.state.Price[5]}</td>
            <td>{this.state.BTC_Price[5]}</td>
            <td>{this.state.Volume[5]}</td>
            <td>{this.state.MarketCapital[5]}</td>
            <td>{this.state.PriceChange[5] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[6]}</th>
            <td>{coinFullName[6]}</td>
            <td>{this.state.Price[6]}</td>
            <td>{this.state.BTC_Price[6]}</td>
            <td>{this.state.Volume[6]}</td>
            <td>{this.state.MarketCapital[6]}</td>
            <td>{this.state.PriceChange[6] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[7]}</th>
            <td>{coinFullName[7]}</td>
            <td>{this.state.Price[7]}</td>
            <td>{this.state.BTC_Price[7]}</td>
            <td>{this.state.Volume[7]}</td>
            <td>{this.state.MarketCapital[7]}</td>
            <td>{this.state.PriceChange[7] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[8]}</th>
            <td>{coinFullName[8]}</td>
            <td>{this.state.Price[8]}</td>
            <td>{this.state.BTC_Price[8]}</td>
            <td>{this.state.Volume[8]}</td>
            <td>{this.state.MarketCapital[8]}</td>
            <td>{this.state.PriceChange[8] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[9]}</th>
            <td>{coinFullName[9]}</td>
            <td>{this.state.Price[9]}</td>
            <td>{this.state.BTC_Price[9]}</td>
            <td>{this.state.Volume[9]}</td>
            <td>{this.state.MarketCapital[9]}</td>
            <td>{this.state.PriceChange[9] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[10]}</th>
            <td>{coinFullName[10]}</td>
            <td>{this.state.Price[10]}</td>
            <td>{this.state.BTC_Price[10]}</td>
            <td>{this.state.Volume[10]}</td>
            <td>{this.state.MarketCapital[10]}</td>
            <td>{this.state.PriceChange[10] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[11]}</th>
            <td>{coinFullName[11]}</td>
            <td>{this.state.Price[11]}</td>
            <td>{this.state.BTC_Price[11]}</td>
            <td>{this.state.Volume[11]}</td>
            <td>{this.state.MarketCapital[11]}</td>
            <td>{this.state.PriceChange[11] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[12]}</th>
            <td>{coinFullName[12]}</td>
            <td>{this.state.Price[12]}</td>
            <td>{this.state.BTC_Price[12]}</td>
            <td>{this.state.Volume[12]}</td>
            <td>{this.state.MarketCapital[12]}</td>
            <td>{this.state.PriceChange[12] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[13]}</th>
            <td>{coinFullName[13]}</td>
            <td>{this.state.Price[13]}</td>
            <td>{this.state.BTC_Price[13]}</td>
            <td>{this.state.Volume[13]}</td>
            <td>{this.state.MarketCapital[13]}</td>
            <td>{this.state.PriceChange[13] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[14]}</th>
            <td>{coinFullName[14]}</td>
            <td>{this.state.Price[14]}</td>
            <td>{this.state.BTC_Price[14]}</td>
            <td>{this.state.Volume[14]}</td>
            <td>{this.state.MarketCapital[14]}</td>
            <td>{this.state.PriceChange[14] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[15]}</th>
            <td>{coinFullName[15]}</td>
            <td>{this.state.Price[15]}</td>
            <td>{this.state.BTC_Price[15]}</td>
            <td>{this.state.Volume[15]}</td>
            <td>{this.state.MarketCapital[15]}</td>
            <td>{this.state.PriceChange[15] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[16]}</th>
            <td>{coinFullName[16]}</td>
            <td>{this.state.Price[16]}</td>
            <td>{this.state.BTC_Price[16]}</td>
            <td>{this.state.Volume[16]}</td>
            <td>{this.state.MarketCapital[16]}</td>
            <td>{this.state.PriceChange[16] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[17]}</th>
            <td>{coinFullName[17]}</td>
            <td>{this.state.Price[17]}</td>
            <td>{this.state.BTC_Price[17]}</td>
            <td>{this.state.Volume[17]}</td>
            <td>{this.state.MarketCapital[17]}</td>
            <td>{this.state.PriceChange[17] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[18]}</th>
            <td>{coinFullName[18]}</td>
            <td>{this.state.Price[18]}</td>
            <td>{this.state.BTC_Price[18]}</td>
            <td>{this.state.Volume[18]}</td>
            <td>{this.state.MarketCapital[18]}</td>
            <td>{this.state.PriceChange[18] + "%"}</td>
          </tr>
          <tr>
            <th scope="row">{coinName[19]}</th>
            <td>{coinFullName[19]}</td>
            <td>{this.state.Price[19]}</td>
            <td>{this.state.BTC_Price[19]}</td>
            <td>{this.state.Volume[19]}</td>
            <td>{this.state.MarketCapital[19]}</td>
            <td>{this.state.PriceChange[19] + "%"}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
  }
}
