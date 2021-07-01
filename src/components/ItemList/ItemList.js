import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/item';

function ItemList( {dataCategory} ) {

    const newCategoryListId = dataCategory

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const url = 'https://mocki.io/v1/fd0e135c-9ad6-4f05-9c80-8538e12407f6'

    const newCategoryList = items.filter(product => {
        return product.categoryId === newCategoryListId
    });

    console.log(items)

    useEffect(() => {
        fetch(url)
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
                    <Item data={ item }/>
                </div>
            )
        })
    } else {
        return items.map((item) => {
            return(
                <div className="col-md-2 col-lg-2 d-flex container-fluid item">
                    <Item data={ item }/>
                </div> 
            )
        })
    }
};

export default ItemList;