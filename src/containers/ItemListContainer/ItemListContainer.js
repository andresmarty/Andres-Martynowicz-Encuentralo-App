import React from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';

import './ItemListContainer.css'

function ItemListContainer({ dataCategory }) {

    return(
        <div className="container-fluid  h-100 d-flex justify-content-center">
            <div className="row w-100 justify-content-center">
                <ItemList dataCategory={dataCategory}/>
            </div>
        </div>
    );
};

export default ItemListContainer;