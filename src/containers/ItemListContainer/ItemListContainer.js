import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';

function ItemListContainer() {

    const { categoryName }  = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            let collection = db;
            if(categoryName) collection = db.where("categoryName", "==", categoryName)
            const response = await collection.get();
            setItems(response.docs.map(it => ({id: it.id, ...it.data()})))
        })();
    }, [categoryName]);

    return(
        <div className="container-fluid h-100 d-flex justify-content-center">
            <div className="row w-100 justify-content-center">
                <ItemList dataCategory={items}/>
            </div>
        </div>
    );
};

export default ItemListContainer;