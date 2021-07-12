import React, { createContext, useContext, useState, useEffect } from 'react';
//import axios from 'axios'
import { db } from '../firebase';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {

const [database, setDatabase] = useState([])

    const getProducts = () => {
    const docs = [];
        db.collection('productos').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc)
                docs.push({ ...doc.data(), id: doc.id });
            });
            setDatabase(docs);
            });
        };

    useEffect(() => {
		getProducts();
	}, []);

    const [cart , setCart] = useState([])
    
    const isInCart = id => cart.some(item => item.id === id)

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            const newCart = cart.map(cartElement => {
                if(cartElement.id === item.id){
                    cartElement.quantity = cartElement.quantity + quantity;
                    item.stock = cartElement.stock - quantity;
                    return {...cartElement} 
                }else {
                    return cartElement;
                }
            })
            setCart(newCart)
        } else {
            setCart(prev => [...prev, { ...item, quantity}]) 
        }
    }  

    const clearCart = () => setCart([]);

    const removeCart = (id) => {
        const newList = cart.filter((item) => item.id !== id);
 
        setCart(newList);
    }

    return (
        <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, database, removeCart, setDatabase }}>
            {props.children}
        </CartContext.Provider>
            )
}


// export const CartProvider = (props) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <CartContext.Provider value={{ state, dispatch }}>
//             {props.children}
//         </CartContext.Provider>
//         )}
