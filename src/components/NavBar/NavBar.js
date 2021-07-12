import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget'
import { Link, useHistory } from 'react-router-dom'
import './NavBar.css'
import { CartContext } from '../../context/CartContext'
import axios from 'axios';


function NavBar() {

        const history = useHistory();

        const handleChange = (e) => {
        if (e.target.value)
            history.push(`/category/${e.target.value}`)
        }

        const [item, setItem] = useState([])

        useEffect(() => {
            (async () => {
                const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
                setItem(data);
            })();
        }, []);

        const { cart } = useContext(CartContext)
        
        // const quantity = Object.keys(cart).length

        const newArr = [...item.reduce((map, obj) => map.set(obj.categoryId, obj), new Map()).values()];

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
                        <NavDropdown.Item key={item.id} id={item.category}>
                            <Link style={{ textDecoration: 'none' }} className="link" to={`/category/${item.categoryId}`}>{item.categoryName}
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