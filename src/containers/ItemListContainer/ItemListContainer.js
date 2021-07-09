import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'

function ItemListContainer() {

    const { categoryName }  = useParams();

    const [items, setItems] = useState([]);

    const { database } = useCartContext();

    useEffect(() => {
        (async () => {
            if(!categoryName) return setItems(database);
            const catItems = database.filter(item => item.categoryId === categoryName);
            setItems(catItems);
        })();
    }, [categoryName, database]);

    return(
        <div className="container-fluid h-100 d-flex justify-content-center">
            <div className="row w-100 justify-content-center">
                <ItemList dataCategory={items}/>
            </div>
        </div>
    );
};

export default ItemListContainer;