import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
        <Navbar className="navbar-custom" variant="dark">
            <Link to={`/`}>
                <Navbar.Brand href="#home">Encuéntralo</Navbar.Brand>
            </Link>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown" onChange={handleChange}>
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
                {cart.length > 0 ? 
                // <span className="itemsInCart"> {cart.length} </span>
                <CartWidget quantityItems={cart} />: <p></p>}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;