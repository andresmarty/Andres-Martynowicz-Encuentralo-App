import React from 'react'
import Checkout from '../components/Checkout/Checkout'
import { orders } from '../firebase';
const CheckoutView = () => {

    const addProduct = async (object) => {
        await orders.doc().set(object);
        console.log('Producto agregado!');
    }

    return (
        <div>
            <Checkout addProduct={addProduct} />
        </div>
    )
}

export default CheckoutView
