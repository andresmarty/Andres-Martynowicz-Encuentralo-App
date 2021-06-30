import React from 'react'
import { Card } from 'react-bootstrap';
import ItemCount from '../../components/ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({ product }) => {

    return (
        <div className="container justify-content-center contenedorCard d-flex align-items-center">
            <div key={product.id} className="itemCompra">
                <div className="container justify-content-center ">
                <div>
                    <div className="container justify-content-center texto">
                        <Card.Text>{product.name}</Card.Text>
                        <Card.Text>{product.price}</Card.Text>
                    </div>
                    <div className="container-fluid contador">
                    <ItemCount stocks={product.stock}/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;

