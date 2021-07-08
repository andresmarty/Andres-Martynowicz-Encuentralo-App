import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ItemListContainer() {

    const { categoryName }  = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
            if(!categoryName) return setItems(data);
            const catItems = data.filter(item => item.categoryId === categoryName);
            setItems(catItems);
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