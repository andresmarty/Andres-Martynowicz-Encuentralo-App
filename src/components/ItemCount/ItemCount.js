import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import './ItemCount.css';
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"

function ItemCount({ product }) {

    const [ addedProduct, setAddedProduct] = useState(true)

    const { addToCart } = useCartContext()

    const onAdd = (quantity) => {
        addToCart(product, quantity);
    }
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

    const handleOnClick = () => {
        setAddedProduct(false)
    }

    return (
        <div className="container-fluid justify-content-center w-100 item1">
            <div className="container-fluid counter">
                <Button className="decrementar" variant="dark" onClick={handleDecrement}>-</Button>
                <Form.Label className="number">{number}</Form.Label>
                <Button className="incrementar" variant="dark" onClick={handleIncrement}>+</Button>
            </div>
            <div className="container-fluid justify-content-center d-flex">
                {addedProduct ? 
                <Button className="button" variant="dark" onClick={() => {onAdd(number); handleOnClick()}}>Añadir al carrito</Button> : 
                <Link to="/cart" className="button">
                <Button className="button" variant="dark" >Terminar Compra</Button>
                </Link>
                }
            </div>
        </div>
    );
}

export default ItemCount;