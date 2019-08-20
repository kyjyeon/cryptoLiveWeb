import React, {Component} from 'react';
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
import socketIOClient from "socket.io-client";
var socket;
class AppNavbar extends Component{
    constructor() {
        super();
        this.state = {
            isOpen: false,
          endpoint: 'http://localhost:3000'
        };
    socket = socketIOClient(this.state.endpoint);
      }
    
    componentDidMount(){}
    //this.toggle = this.toggle.bind(this);
    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Menu</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://localhost:3001">
                                    SEARCH
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>                
            </Navbar>
        </div>
        );
    }
}

export {AppNavbar, socket};