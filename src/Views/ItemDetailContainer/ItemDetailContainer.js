import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import ItemDescription from '../../components/ItemDescription/ItemDescription'
// import axios from 'axios'

const ItemDetailContainer = ({ match }) => {

    const itemId = match.params.id;

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://mocki.io/v1/fd0e135c-9ad6-4f05-9c80-8538e12407f6`)
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
                        <div className="row superior w-100 d-flex" key={ dataProducto.id }>
                            <div className="col-lg-8 col-sm-8 justify-content-center d-flex align-intems-center">
                                <div className="container-fluid containerImagen justify-content-center align-items-center d-flex">
                                    <img className="imagenDetail" src={ dataProducto.pictureURL } alt="producto"></img>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 justify-content-center d-flex align-intems-center"><ItemDetail product={ dataProducto }/>
                            </div>
                        </div>
                        <div className="row inferior d-flex">
                            <ItemDescription product={dataProducto} />
                        </div>
                        </>
                    );
                })}
        </div>
    )
}

export default ItemDetailContainer
