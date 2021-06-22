import React from 'react';
import './ItemListContainer.css'
import { Card } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount"

function ItemListContainer(props) {
    return (
            <div className="col-md-4 col-lg-3 d-flex container item">
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
            );
        };

export default ItemListContainer;