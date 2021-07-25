import React,{Component} from 'react';

import {Navbar,Nav, Container} from 'react-bootstrap';
export class Navigation extends Component{
    render(){
        return(
            <Navbar fixed="top" bg="primary" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand href="/"><i className="bi bi-phone"></i>Phone Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="d-inline p-2 bg-primary text-white" href="/">Home                           
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="d-inline p-2 bg-primary text-white" href="/cart"><i className="bi bi-cart3"></i>Cart</Nav.Link>
                        <Nav.Link className="d-inline p-2 bg-primary text-white" href="/login">Login</Nav.Link>
                        <Nav.Link className="d-inline p-2 bg-primary text-white" href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar> 
        )
    }
}