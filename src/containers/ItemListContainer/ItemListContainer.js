import React from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';

import './ItemListContainer.css'

function ItemListContainer({ dataCategory }) {

    return(
        <div className="container-fluid  h-100 d-flex justify-content-center">
            <div className="row rowFlex w-100 justify-content-center flex-row flex-nowrap overflow-auto">
                <ItemList dataCategory={dataCategory}/>
            </div>
        </div>
    );
};

export default ItemListContainer;