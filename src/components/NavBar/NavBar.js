import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { ItemsContext } from '../../context/ItemContext'
import { CartContext } from '../../context/CartContext'

function NavBar() {

        const [cart, setCart] = useContext(CartContext)
        const quantity = Object.keys(cart).length

        console.log(quantity)

        const [item, setItem] = useContext(ItemsContext)

        const newArr = [...item.reduce((map, obj) => map.set(obj.categoryId, obj), new Map()).values()];

        return (
        <Navbar className="navbar-custom" variant="dark">
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
                <span>Items In cart: { quantity }</span>
                <CartWidget />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;