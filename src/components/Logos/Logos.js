import React, {useState, useEffect} from 'react'
import { logos } from '../../firebase'
import './Logos.css'


const Logos = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        (async () => {
            const response = await logos.get();
            setItems(response.docs.map(it => ({id: it.id, ...it.data()})))
        })();
    }, []);

    console.log(items)


    return (
        <div className="container-fluid">
            <row>
                 {items.map((it) => {
                    return <img 
                    src={it.marca}
                    alt="First slide"
                    className="logos">
                    </img>    
                })}
            </row>
        </div>
    )
}
 
export default Logos;
