import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import ItemDescription from '../../components/ItemDescription/ItemDescription'
import { useParams } from 'react-router';
import { useCartContext } from '../../context/CartContext'

const ItemDetailContainer = () => {

    const { id } = useParams();

    const { database } = useCartContext()

    const [ item, setItem ] = useState([]);

    useEffect(() => {
        (async () => {
            const foundItem = database.find(it => it.id === id);
            console.log(foundItem)
            setItem(currentCart => [...currentCart, foundItem]);
        })();
    }, [id, database]);

    return (
        <div className="container-fluid h-100"> 
                {item.map((dataProducto) => {
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
