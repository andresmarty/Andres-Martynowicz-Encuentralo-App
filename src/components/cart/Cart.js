import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './Cart.css'
import { Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, clearCart, removeCart } = useCartContext();

  const itemInCart = Object.keys(cart).length

  const precioTotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

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
        ))};
        </div>
        
            <div>
            {itemInCart  ?
                <div>
                <Button className="vaciarButton" variant="dark" onClick={clearCart}>Vaciar Carro de Compras</Button>
                <h1> Precio Total ${precioTotal} </h1>
                <Link to={`/checkout`}>
                <Button variant="dark">Termina la compra!</Button>
                </Link>
                </div>

                : 
                <div>
                <h3 className="align-items-center justify-content-center">No hay Items en el Carro </h3>
                <Link to="/">
                    <Button className="vaciarButton" variant="dark" onClick={clearCart}>Segui Buscando!</Button>
                </Link>
                </div>
            }
            </div> 

    </>
  )
}

export default Cart;