import React from 'react'
import { Card } from 'react-bootstrap';
import './item.css'

function item({ data }) {
    return (
        <>
            <Card key={data.id} className="container-fluid card">
                <div className="container-fluid">
                    <img className="imagen" src={data.img} alt="producto"></img>
                </div>
                <div className="container-fluid">
                <Card.Body>
                    <div className="container texto">
                        <h5 className="titulo">{data.name}</h5>
                        <div className="precioStock">
                            <div className="precio">${data.price}</div>
                            <div className="stock">En stock: {data.stock}</div>
                        </div>
                    </div>
                    <div className="container-fluid contador">
                    </div>
                </Card.Body>
                </div>
            </Card>
        </>
    )
}

export default item;
