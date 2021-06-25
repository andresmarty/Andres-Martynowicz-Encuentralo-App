import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {
    return(
        <div className="container d-flex justify-content-center"> 
            <div className="row h-100 w-100 justify-content-center">
                <ItemList />
            </div>
        </div>
    );
};

export default ItemListContainer;