import React from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'
import { useCartContext } from "../../context/CartContext";
import './ItemDetail.css'


const ItemDetail = ({ product }) => {
    const { realStock } = useCartContext()

    const stock = realStock(product);

    return (
        <div className="container-fluid contenedorCard">
            <div key={product.id} className="itemCompra justify-content-center align-items-center d-flex">
                <div className="container justify-content-center ">
                    <div>
                        <div className="container justify-content-center texto">
                            <h2>{product.name}</h2>
                            <h3>${product.price}</h3>
                        </div>
                        <div className="container-fluid contador">
                        {stock > 0 ? <ItemCount product={ product } stock={stock}/>: 
                        <p>Sin stock</p> 
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;

