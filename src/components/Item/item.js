import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Card } from 'react-bootstrap';

function item(props) {
    return (
        <div>
            <Card>
                <div className="container justify-content-center">
                    <img className="imagen" src={props.img} alt="producto"></img>
                </div>
                <div className="container justify-content-center">
                <Card.Body>
                    <div className="container justify-content-center texto">
                        <Card.Text>{props.name}</Card.Text>
                        <Card.Text>{props.price}</Card.Text>
                    </div>
                    <div className="container-fluid contador">
                    <ItemCount stocks={props.stock}/>
                    </div>
                </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default item
