import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { TabContent, TabPane} from 'reactstrap';
import React from 'react';
import classnames from 'classnames';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import socketIOClient from "socket.io-client";
import TableUSD from "./components/tableUSD";
//import TableEUR from "./components/tableEUR";
// const tableDollar = tableUSD.table();
//const tableEuro = tableEUR.table();
//const socket = socketIOClient('http://localhost:3000');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      products: [],
      isOpen: false,
      activeTab: '1',
    }
  }
  toggle(tab) {
    this.setState({
      isOpen: !this.state.isOpen
    });
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  //renderInfos = ({ _TIME }) => <div key={_TIME}>{_TIME}</div>;
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: "url(background.jpeg)",
          backgroundSize: "cover",
          minHeight: "1000px",
          height: "150%"
        }}
      >
        <div>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
              <NavbarBrand href="/">MENU</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="127.0.0.1:3000/search">SEARCH</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        <div
          className="table"
          style={{
            padding: "220px",
            paddingBottom: "180px",
            paddingTop:"100px"
          }}
        >
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === "1"
                })}
                onClick={() => {
                  this.toggle("1");
                }}
                style={{
                  padding: ".7rem 4rem",
                  fontWeight: "bold",
                  backgroundColor: "lightgreen",
                  fontSize: "large"
                }}
              >
                USD
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <TableUSD className="tbodyTable"/>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}
// function realtimedata(interval, cb){
//   socket.on('USDrealtime', time)
//   socket.emit('USDrealtime',12000)
// }

export{App};