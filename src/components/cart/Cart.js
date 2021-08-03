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
            {cart.map((item) => (
                <div className="container contenedorCart">
                    <div className="row listContainer align-items-center justify-content-center">
                        <div className="col-3 align-items-center">
                            <img src={item.img} alt="producto" className="imagenList"></img>
                        </div>
                        <div className="col-3 align-items-center justify-content-center">
                            <p className="listDescription">{item.name}</p>
                        </div>
                        <div className="col-3 align-items-center text-center justify-content-center">
                            <p className="quantity">Cantidad Seleccionada: {item.quantity}</p>
                        </div>
                        <div className="col-3 align-items-center text-center justify-content-center">
                        <Button className="vaciarButton" variant="dark" onClick={ () => removeCart(item.id) }>Eliminar del Carro</Button>
                        </div>
                    </div>
                </div>
            ))}
        
            <div className="container">
            {itemInCart  ?
                <div className="row justify-content-center">
                    <div className="col-3 d-flex justify-content-start">
                        <Button  variant="dark" onClick={clearCart}>Vaciar Carro de Compras</Button>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <h5 className="text1"> Precio Total ${precioTotal} </h5>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <Link to={`/checkout`}>
                            <Button variant="dark">Termina la compra!</Button>
                        </Link>
                    </div>
                </div>
                : 
                <div className="containerNoItems">
                    <h3 className="d-flex justify-content-center text">No hay Items en el Carro </h3>
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