import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/item';

function ItemList( {dataCategory} ) {

    const newCategoryListId = dataCategory

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const url = 'https://mocki.io/v1/628ed509-eed0-4438-a21d-71c4980d707e'

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
    } else {

    return(
            <>
            {newCategoryList.map((item) => {
                return(
                <div className="col-md-4 col-lg-3 d-flex container item">
                        <Item data={ item }/>
                </div>
                )})}
            </>
        );
    }
};

export default ItemList;