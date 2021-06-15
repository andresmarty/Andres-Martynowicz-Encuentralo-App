import React from 'react';
import img from './CartWidget.png'

function CartWidget(props) {
    return (
        <div>
            <img src={img} alt="Carrito de Compras" className="carrito"></img>
        </div>
    );
};

export default CartWidget;