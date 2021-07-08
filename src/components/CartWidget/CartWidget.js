import React from 'react';
import img from './car.png'
import './CartWidget.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function CartWidget() {
    return (
        <div>
            <Nav.Item>
                <Link to="/cart" className="mr-auto">
                <img src={img} alt="Carrito de Compras" className="carrito"></img>
                </Link>
                
            </Nav.Item>
        </div>
    );
};

export default CartWidget;