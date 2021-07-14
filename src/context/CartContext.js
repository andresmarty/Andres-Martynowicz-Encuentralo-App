import React, { createContext, useContext, useState, useEffect } from 'react';
//import axios from 'axios'
import { db } from '../firebase';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {

const [database, setDatabase] = useState([])

    useEffect(() => {
        (async () => {
            const response = await db.get();
            setDatabase(response.docs.map(it => ({id:it.id, ...it.data()})))
        })
		();
	}, []);

    const [cart , setCart] = useState([])

    const realStock = (product) => {
        const foundItem = cart.find(e => e.id === product.id)
        return foundItem ? product.stock - foundItem.quantity : product.stock;
    }

    
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
        <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, database, removeCart, setDatabase, realStock }}>
            {props.children}
        </CartContext.Provider>
            )
}
