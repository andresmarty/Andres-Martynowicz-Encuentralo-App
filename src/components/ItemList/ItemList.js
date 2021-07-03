import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/item';
import { Link } from 'react-router-dom'

function ItemList( {dataCategory} ) {

    const newCategoryListId = dataCategory

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const newCategoryList = items.filter(product => {
        return product.categoryId === newCategoryListId
    });

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}`)
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        }, [newCategoryListId])
    
    

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (newCategoryListId) {
        return newCategoryList.map((item) => {
            return (
                <div className="col-md-2 col-lg-2 d-flex container-fluid item">
                    <Link to={`/detail/${item.id}`} className="link" style={{ textDecoration: 'none' }}>
                        <Item data={ item }/>
                    </Link>
                </div>
            )
        })
    } else {
        return items.map((item) => {
            return(
                <div className="col-md-2 col-lg-2 d-flex container-fluid item">
                    <Link to={`/detail/${item.id}`} className="link" style={{ textDecoration: 'none' }}>
                        <Item data={ item }/>
                    </Link>
                </div> 
            )
        })
    }
};

export default ItemList;