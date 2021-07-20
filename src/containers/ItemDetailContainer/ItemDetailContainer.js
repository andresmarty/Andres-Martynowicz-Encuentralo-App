import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import ItemDescription from '../../components/ItemDescription/ItemDescription'
import { useParams } from 'react-router';
// import { useCartContext } from '../../context/CartContext'
import { db } from '../../firebase';

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState([]);

    const { id } = useParams();

    useEffect(() => {
		(async () => {
            const response = await db.doc(id).get();
            const databaseProducto = []
            databaseProducto.push({id: response.id, ...response.data()})
            setItem(databaseProducto)
        })();
	},[id]);

    console.log(item, "ITEM")

    return (
        <div className="container-fluid h-100 w-100 itemDetailContainer"> 
                {item.map((dataProducto) => {
                    return(
                        <>
                        <div className="row superior w-100 d-flex" key={ dataProducto.id }>
                            <div className="col-lg-8 col-sm-8 justify-content-center d-flex align-intems-center">
                                <div className="container-fluid containerImagen justify-content-center align-items-center d-flex">
                                    <img className="imagenDetail" src={ dataProducto.img } alt="producto"></img>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 justify-content-center d-flex align-intems-center"><ItemDetail product={ dataProducto }/>
                            </div>
                        </div>
                        <div className="container-fluid inferior d-flex">
                            <ItemDescription product={dataProducto} />
                        </div>
                        </>
                    );
                })}
        </div>
    )
}

export default ItemDetailContainer
