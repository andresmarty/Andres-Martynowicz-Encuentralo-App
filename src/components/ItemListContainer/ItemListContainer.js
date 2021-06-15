import React from 'react';
import './ItemListContainer.css'

function ItemListContainer(props) {
    return (
        <div className="ItemList">
            <h1>{props.title}</h1>
        </div>
    );
};

export default ItemListContainer;