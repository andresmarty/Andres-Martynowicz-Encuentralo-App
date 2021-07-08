import React from 'react'
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import './Cart.css'
import { Button  } from 'react-bootstrap';

const Cart = () => {
  const { cart, clearCart } = useCartContext();

  if (!cart.length) return <Redirect to='/' />;

  return (
    <div>
      {cart.map((item) => (
        <div className="container">
            <div className="row listContainer">
                <div className="col-3">
                    <img src={item.pictureURL} alt="producto" className="imagenList"></img>
                </div>
                <div className="col-3">
                    <p className="listDescription">{item.name}</p>
                </div>
                <div className="col-3">
                    <p className="quantity">Cantidad: {item.quantity}</p>
                </div>
                <div className="col-3">
                    <p className="quantity">Cantidad: {item.quantity}</p>
                </div>
            </div>
        </div>
        
      ))}
      <div>
      <Button className="button" variant="dark" onClick={clearCart}>VACIAR CARRITO</Button>
      </div>
    </div>
  )
}

export default Cart;