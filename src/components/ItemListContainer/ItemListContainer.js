import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ match }) {

    const categoryListId = match.params.categoryId;
    
    return(
        <div className="container-fluid h-100 d-flex justify-content-center">
            <div className="row w-100 justify-content-center">
                <ItemList dataCategory={categoryListId}/>
            </div>
        </div>
    );
};

export default ItemListContainer;