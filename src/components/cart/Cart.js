import React from 'react'
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import './Cart.css'
import { Button  } from 'react-bootstrap';

const Cart = () => {
  const { cart, clearCart, removeCart } = useCartContext();

  if (!cart.length) return <Redirect to='/' />;

  return (
      <>
        <div className="container contenedorCart">
        {cart.map((item) => (
            <div className="container">
                <div className="row listContainer">
                    <div className="col-3">
                        <img src={item.img} alt="producto" className="imagenList"></img>
                    </div>
                    <div className="col-3">
                        <p className="listDescription">{item.name}</p>
                    </div>
                    <div className="col-3">
                        <p className="quantity">Cantidad: {item.quantity}</p>
                    </div>
                    <div className="col-3">
                    <Button className="vaciarButton" variant="dark" onClick={ () => removeCart(item.id) }>Eliminar del Carro</Button>
                    </div>
                </div>
            </div>
            
        ))}
        </div>
        <div>
            <Button className="vaciarButton" variant="dark" onClick={clearCart}>Vaciar Carro de Compras</Button>
        </div>
    </>
  )
}

export default Cart;