import React from 'react';
import img from './car.png'
import './CartWidget.css';
import { Nav } from 'react-bootstrap';

function CartWidget(props) {
    return (
        <div>
            <Nav.Item>
                <Nav.Link href="/home" className="mr-auto">
                <img src={img} alt="Carrito de Compras" className="carrito"></img>
                </Nav.Link>
            </Nav.Item>
        </div>
    );
};

export default CartWidget;