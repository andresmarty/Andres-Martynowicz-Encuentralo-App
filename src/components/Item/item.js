import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function item({ data }) {
    return (
        <div>
            <Card key={data.id}>
                <div className="container justify-content-center">
                    <img className="imagen" src={data.pictureURL} alt="producto"></img>
                </div>
                <div className="container justify-content-center">
                <Card.Body>
                    <div className="container justify-content-center texto" key={data.id}>
                        <Link to={`/detail/${data.id}`}>
                            <Card.Text>{data.name}</Card.Text>
                        </Link>
                        <Card.Text>{data.price}</Card.Text>
                    </div>
                    <div className="container-fluid contador">
                    <ItemCount stocks={data.stock}/>
                    </div>
                </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default item;
