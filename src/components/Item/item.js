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
                        
                            <Card.Text>{data.name}</Card.Text>

                        <Card.Text>Precio: {data.price}</Card.Text>
                    </div>
                    <div className="container-fluid contador">
                    {/* <ItemCount stocks={data.stock}/> */}
                    </div>
                </Card.Body>
                </div>
            </Card>
        </>
    )
}

export default item;
