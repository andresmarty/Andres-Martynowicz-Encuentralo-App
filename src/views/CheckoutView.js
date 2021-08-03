import React, {useState} from 'react'
import Checkout from '../components/Checkout/Checkout'
import './CheckoutView.css'
import { orders } from '../firebase';


const CheckoutView = () => {

    const [order, setOrder] = useState([])

    const addProduct = async (object) => {
        const newOrder = await orders.add(object)
        setOrder(newOrder.id)
    }

    const lenghtOrder = order.length



    return (
        <div className="container h-100">
            <div className="row h-25 justify-content-center">
                <h4 className="text2">Llena el Formulario y obtene tu orden de pedido!</h4>
            </div>
            <div className="row h-75 justify-content-center">
                <Checkout addProduct={addProduct}/>
                {lenghtOrder > 0 ? <p className="text">Your order ID is {order}</p>: <p> </p>}
            </div>
        </div>
    )
}

export default CheckoutView
