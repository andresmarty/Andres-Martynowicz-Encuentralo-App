import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import ItemDescription from '../../components/ItemDescription/ItemDescription'
// import axios from 'axios'

const ItemDetailContainer = ({ match }) => {

    const itemId = match.params.id;

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://mocki.io/v1/abc26028-c13a-447a-b2a4-f8f0b5ebc1ae`)
            .then(res => res.json())
            .then((res) => setProduct(res))
    },[itemId]);

    const resultadoProducto = product.filter(elemento => {
        return elemento.id === itemId
    });

    console.log(resultadoProducto)

    return (
        <div className="container-fluid h-100"> 
                {resultadoProducto.map((dataProducto) => {
                    return(
                        <>
                        <div className="row w-100 h-75" key={ dataProducto.id }>
                            <div className="col-lg-7 col-sm-7 h-100 d-flex justify-content-center align-items-center">
                                <div className="container-fluid containerImagen justify-content-center align-items-center d-flex">
                                    <img className="imagenDetail" src={ dataProducto.pictureURL } alt="producto"></img>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-5 columna-derecha"><ItemDetail product={ dataProducto }/>
                            </div>
                        </div>
                        <div className="row h-25">
                            <ItemDescription product={dataProducto} />
                        </div>
                        </>
                    );
                })}
        </div>
    )
}

export default ItemDetailContainer
