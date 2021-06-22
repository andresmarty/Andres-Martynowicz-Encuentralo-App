import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => (
        <Navbar className="navbar" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Encuentralo</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Zapatillas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Buzos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Pantalones</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <CartWidget />
            </Navbar.Collapse>
        </Navbar>
)

export default NavBar;