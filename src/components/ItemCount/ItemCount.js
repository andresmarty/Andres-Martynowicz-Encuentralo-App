import React, { useState, useContext } from 'react'
import { Button, Form } from 'react-bootstrap';
import './ItemCount.css';
import { CartContext } from "../../context/CartContext";

function ItemCount({ product }) {

    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const Item = {item: product, quantity: number}
        setCart(currentCart => [...currentCart, Item]);
    }

    console.log(product.stock)

    const [number, setNumber] = useState(1);

    const handleIncrement = () => {
        if (number < product.stock){
            setNumber(number + 1)
        }
    }
  
    const handleDecrement = () => {
        if (number !== 1) {
            setNumber(number - 1)
        }
    }

    console.log(cart)


    return (
        <div className="container-fluid justify-content-center w-100 item1">
            <div className="container-fluid counter">
                <Button className="decrementar" variant="dark" onClick={handleDecrement}>-</Button>
                <Form.Label className="number">{number}</Form.Label>
                <Button className="incrementar" variant="dark" onClick={handleIncrement}>+</Button>
            </div>
            <div className="container-fluid justify-content-center d-flex">
                <Button className="button" variant="dark" onClick={ addToCart }>Añadir al carrito</Button>
            </div>
        </div>
    );
}

export default ItemCount;
