import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {

        const [producto, setProducto] = useState([]) 

        useEffect(() => {
            fetch(`https://mocki.io/v1/fd0e135c-9ad6-4f05-9c80-8538e12407f6`)
                .then(res => res.json())
                .then((res) => setProducto(res))
        },[]);

        const newArr = [...producto.reduce((map, obj) => map.set(obj.categoryId, obj), new Map()).values()];

        return (
        <Navbar className="navbar" bg="dark" variant="dark">
            <Link to={`/`}>
                <Navbar.Brand href="#home">Encuéntralo</Navbar.Brand>
            </Link>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
            {newArr.map((item) => {
                return(
                        
                            <NavDropdown.Item key={item.id} id={item.category}><Link style={{ textDecoration: 'none' }} className="link" to={`/category/${item.categoryId}`}>{item.categoryName}</Link></NavDropdown.Item>
                        
                )
            })}
            </NavDropdown>
            </Nav>
            <CartWidget />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;