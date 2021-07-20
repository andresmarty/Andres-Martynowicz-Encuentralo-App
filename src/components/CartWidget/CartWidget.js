import React from 'react';
import img from './car.png'
import './CartWidget.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function CartWidget({ quantityItems }) {

    const stock = quantityItems.reduce((sum, values) => (sum + values.quantity), 0)

//     var totalAges = arr.reduce((sum, value) => ( sum + value.Edad ), 0);
// console.log(totalAges);

    return (
        <div className="itemsInCart">
            <Nav.Item>
                <Link to="/cart" className="mr-auto">
                <span> { stock } </span>
                <img src={img} alt="Carrito de Compras" className="carrito"></img>
                </Link>
            </Nav.Item>
        </div>
    );
};

export default CartWidget;