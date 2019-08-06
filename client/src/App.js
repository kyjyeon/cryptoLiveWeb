// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// // import tableMain from './components/tableMain'
// // import AppNavbar from './components/AppNavbar';
// import classnames from 'classnames';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Table
} from "reactstrap";
import { TabContent, TabPane, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import tableUSD from "./components/tableUSD";
// import tableEUR from "./components/tableEUR";
// const tableDollar = tableUSD.table();
// const tableEuro = tableEUR.table();

// export default class App extends Component {

//     state = {
//       products: [],
//       isOpen: false,
//       activeTab: '1'
//     };

//   toggle = (tab) => {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//     if(this.state.activeTab !== tab){
//       this.setState({
//         activeTab: tab
//       });
//     }
//   };
//   componentDidMount() {
//     this.toggle = this.toggle.bind(this);
//     this.getData();
//   };

//   getData = () => {
//     fetch("/api/items")
//       .then(res => res.json())
//       .then(data => this.setState({ products: data }))
//       .catch(err => console.err(err));
//   };

//   renderInfos = ({ _TIME }) => <div key={_TIME}>{_TIME}</div>;

//   render() {
//     const { products } = this.state;
//     return (
//       <div className="App" style={{ backgroundImage: "url(background.jpeg)" }}>
//         <div>
//           <Navbar color="dark" dark expand="sm" className="mb-5">
//             <Container>
//               <NavbarBrand href="/">Menu</NavbarBrand>
//               <NavbarToggler onClick={this.toggle} />
//               <Collapse isOpen={this.state.isOpen} navbar>
//                 <Nav className="ml-auto" navbar>
//                   <NavItem>
//                     <NavLink href="https://github.com/kyjyeon">Github</NavLink>
//                   </NavItem>
//                 </Nav>
//               </Collapse>
//             </Container>
//           </Navbar>
//         </div>
//         <div style={{ backgroundColor: "white" ,margin:"100px"}}>
//           <Nav tabs>
//             <NavItem>
//               <NavLink
//                 className={classnames({ active: this.state.activeTab === '1' })}
//                 onClick={() => { this.toggle('1'); }}
//               >
//                 USD
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//               className={classnames({ active: this.state.activeTab === '2' })}
//               onClick={() => { this.toggle('2'); }}
//               >
//                 EUR
//               </NavLink>
//             </NavItem>
//           </Nav>
//           <TabContent activeTab={this.state.activeTabe}>
//             <TabPane tabId="1">
//               {tableDollar}
//             </TabPane>
//             <TabPane tabId="2">
//               {tableEuro}
//             </TabPane>
//           </TabContent>
//         </div>
//         {products.map(this.renderInfos)}
//       </div>
//     );
//   }
// }
import React from 'react';
import classnames from 'classnames';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import tableUSD from "./components/tableUSD";
import tableEUR from "./components/tableEUR";
const tableDollar = tableUSD.table();
const tableEuro = tableEUR.table();

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      products: [],
      isOpen: false,
      activeTab: '1'
    };
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
            <Navbar color="dark" dark expand="large" className="mb-5">
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
              backgroundColor: "powderblue",
        
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
                  Tab1
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
                  Tab2
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">{tableDollar}</TabPane>
              <TabPane tabId="2">{tableEuro}</TabPane>
            </TabContent>
          </div>
        </div>
    );
  }
}