import React, { useEffect, useState }  from 'react'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

const CategoryView = () => {

    const { categoryName }  = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            let collection = db;
            if(categoryName) collection = db.where("categoryName", "==", categoryName)
            const response = await collection.get();
            setItems(response.docs.map(it => ({id: it.id, ...it.data()})))
        })();
    }, [categoryName]);

    return (
        <div>
            <div className="row productList h-25 w-100 justify-content-center">
                <h3>{categoryName}</h3>
            </div>
            <ItemListContainer dataCategory={items} />
        </div>
    )
}

export default CategoryView
