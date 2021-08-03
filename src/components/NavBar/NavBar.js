import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget'
import { Link, useHistory } from 'react-router-dom'
import './NavBar.css'
import { useCartContext } from '../../context/CartContext'

function NavBar() {

        const history = useHistory();

        const handleChange = (e) => {
        if (e.target.value)
            history.push(`/category/${e.target.value}`)
        }

        const { database, cart } = useCartContext();

        const [item, setItem] = useState([])

        useEffect(() => {
            (async () => {
                const data  = database;
                setItem(data);
            })();
        }, [database]);

        const newArr = [...item.reduce((map, obj) => map.set(obj.categoryName, obj), new Map()).values()];

        return (
            
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-custom">
            <Container>
                <Link to={`/`}>
                <Navbar.Brand className="logo" href="#home">Encuentralo</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <NavDropdown menuVariant="dark" title="Categorias" onChange={handleChange} id="collasible-nav-dropdown">
                        {newArr.map((item) => {
                            return(
                                    <NavDropdown.Item key={item.id} id={item.categoryName}>
                                        <Link style={{ textDecoration: 'none' }} className="link" to={`/category/${item.categoryName}`}>{item.categoryName}
                                        </Link>
                                    </NavDropdown.Item>
                            )
                        })}
                    </NavDropdown>
                    </Nav>
                    {/* <Form className="d-flex submitInput">
                        <FormControl
                            type="search"
                            placeholder="Busca tu Producto"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="light">Buscar</Button>
                    </Form> */}
                    <Nav className="ml-auto justify-content-end">
                        {cart.length > 0 ? 
                        // <span className="itemsInCart"> {cart.length} </span>
                        <CartWidget quantityItems={ cart } />:
                        
                        <CartWidget quantityItems={ cart } />
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;



