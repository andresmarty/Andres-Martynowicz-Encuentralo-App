import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/item';
import { Link } from 'react-router-dom'

function ItemList( {dataCategory} ) {

    if (dataCategory) {
        return dataCategory.map((item) => {
            return (
                <div className="col-md-2 col-lg-2 d-flex container-fluid item" key={item.id}>
                    <Link to={`/detail/${item.id}`} className="link" style={{ textDecoration: 'none' }}>
                        <Item data={ item }/>
                    </Link>
                </div>
            )
        })
    } 
}

export default ItemList;