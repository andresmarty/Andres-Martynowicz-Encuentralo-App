import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import ItemDescription from '../../components/ItemDescription/ItemDescription'
import { useParams } from 'react-router';
import axios from 'axios'

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [ item, setItem ] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
            const foundItem = data.find(it => it.id === id);
            console.log(foundItem)
            setItem(currentCart => [...currentCart, foundItem]);
        })();
    }, [id]);

    console.log(item, "aaaaassss")

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
