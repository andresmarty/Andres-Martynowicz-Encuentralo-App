import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {

        const [producto, setProducto] = useState([]) 

        useEffect(() => {
            fetch(`https://mocki.io/v1/628ed509-eed0-4438-a21d-71c4980d707e`)
                .then(res => res.json())
                .then((res) => setProducto(res))
        },[]);

        console.log(producto)

        const newArr = [...producto.reduce((map, obj) => map.set(obj.categoryId, obj), new Map()).values()];

        console.log(newArr);

        return (
        <Navbar className="navbar" bg="dark" variant="dark">
            <Link to={`/`}>
                <Navbar.Brand href="#home">Encuentralo</Navbar.Brand>
            </Link>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
            {newArr.map((item) => {
                return(
                        
                            <NavDropdown.Item id={item.category}><Link to={`/category/${item.categoryId}`}>{item.categoryName}</Link></NavDropdown.Item>
                        
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