
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
import socketIOClient from "socket.io-client";
import TableUSD from "./components/tableUSD";
import TableEUR from "./components/tableEUR";
// const tableDollar = tableUSD.table();
//const tableEuro = tableEUR.table();

var socket;
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      products: [],
      isOpen: false,
      activeTab: '1',
      endpoint: 'http://localhost:3000'
    };
    socket= socketIOClient(this.state.endpoint);
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
          minHeight:"1000px",
          height: "150%"
        }}
      >
          <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
              <Container>
                <NavbarBrand href="/">Menu</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="https://github.com/kyjyeon">
                        Github
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          </div>
          <div
            className="table"
            style={{ 
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
                >
                  USD
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  EUR
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1"><TableUSD /></TabPane>
              <TabPane tabId="2"><TableEUR /></TabPane>
            </TabContent>
          </div>
        </div>
    );
  }
}

export{socket, App};