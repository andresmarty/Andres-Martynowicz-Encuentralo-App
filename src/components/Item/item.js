import React from 'react'
import { Card } from 'react-bootstrap';
import './item.css'

function item({ data }) {
    return (
        <>
            <Card key={data.id} className="container-fluid card">
                <div className="container-fluid justify-content-center">
                    <img className="imagen" src={data.img} alt="producto"></img>
                </div>
                <div className="container-fluid justify-content-center">
                <Card.Body>
                    <div className="container justify-content-center texto">
                        
                            <h4>{data.name}</h4>

                        <Card.Text>Precio: ${data.price}</Card.Text>
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
