import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import './Checkout.css'
import { useCartContext } from '../../context/CartContext'

const Checkout = ({ addProduct }) => {
    
    const initialState = {
        nombre : '',
        apellido : '',
        telefono : '',
        email : '',
        email2 : '',
    };

    const { cart } = useCartContext()

    const [ cartValues, setCartValues ] = useState([])

    const result = cart.map((item) => ({id:item.id, title:item.name, price:item.price}))

    useEffect (() => {
        setCartValues(result)
    },[])
    
    console.log(cartValues)

    const [ values, setValues ] = useState(initialState)

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value, cartValues})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addProduct(values);
        setValues({...initialState});
    }

    return (
        <div className="container checkout">
            <div className="form-container">
                <Form onSubmit={ handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control 
                            type="text"
                            placeholder="Nombre" 
                            onChange={ handleOnChange } 
                            name="nombre"
                            value={values.nombre}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Control 
                            type="text"
                            placeholder="Apellido" 
                            onChange={ handleOnChange } 
                            name="apellido"
                            value={values.apellido}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Control 
                            type="number"
                            placeholder="Telefono" 
                            onChange={ handleOnChange } 
                            name="telefono"
                            value={values.telefono}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Control 
                            type="email"
                            placeholder="name@example.com"
                            onChange={ handleOnChange } 
                            name="email"
                            value={values.email}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Control 
                            type="email"
                            placeholder="name@example.com"
                            onChange={ handleOnChange } 
                            name="email2"
                            value={values.email2}/>
                    </Form.Group>
                        <Button variant="primary" type="submit">Comprar!</Button>
                    </Form>
            </div>
        </div>
    )
}

export default Checkout
