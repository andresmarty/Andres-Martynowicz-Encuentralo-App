import React, { createContext, useState, useEffect } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}`)
            .then(res => res.json())
            .then((res) => setItems(res))
    },[]);

    return (
        <ItemsContext.Provider value={[ items, setItems ]}>
            {props.children}
        </ItemsContext.Provider>
        )}

