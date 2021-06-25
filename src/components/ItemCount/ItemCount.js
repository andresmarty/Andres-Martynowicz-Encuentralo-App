import React, { useState, createContext } from 'react'
import { Button, Form } from 'react-bootstrap';
import './ItemCount.css';

function ItemCount(props) {
    const [number, setNumber] = useState(1);
    const [item, setItem] = useState(0)

    const handleIncrement = () => {
        if (number < props.stocks){
            setNumber(number + 1)
        }
    }
  
    const handleDecrement = () => {
        if (number !== 1) {
            setNumber(number - 1)
        }
    }

    const incrementCart = () => {
        setItem(item + 1)
    }

    return (
        <div className="container justify-content-center w-100 item1">
            <div className="counter w-100">
                <Button variant="outline-dark" onClick={handleDecrement}>-</Button>
                <Form.Label className="number">{number}</Form.Label>
                <Button variant="outline-dark" onClick={handleIncrement}>+</Button>
            </div>
            <div className="container justify-content-center d-flex">
                <Button variant="outline-dark" onClick={incrementCart}>Add To Cart</Button>
            </div>
        </div>
    );
}

export default ItemCount;
