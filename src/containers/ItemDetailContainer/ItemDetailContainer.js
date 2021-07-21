import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import { useParams } from 'react-router';
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
                            <div className="row superior h-100 w-100" key={ dataProducto.id }>
                                <div className="col-lg-9 justify-content-center d-flex align-intems-center">
                                    <div className="container-fluid containerImagen justify-content-center align-items-center d-flex efectolupa">
                                        <img className="imagenDetail" src={ dataProducto.img } alt="producto"></img>
                                    </div>
                                </div>
                                <div className="col-lg-3 justify-content-center d-flex align-intems-center">
                                    <ItemDetail product={ dataProducto }/>
                                </div>
                            </div>
                            <div className="row h-25 inferior d-flex">
                                <div className="col-sm-9 col-lg-9 col-md-9 text-left">
                                    <p>
                                        { dataProducto.description }
                                    </p>
                                </div>
                                <div className="col-sm-3 col-lg-3 col-md-3">

                                </div>
                            </div>
                        </>
                    );
                })}
        </div>
    )
}

export default ItemDetailContainer
