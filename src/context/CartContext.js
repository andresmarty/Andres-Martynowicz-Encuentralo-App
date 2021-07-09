import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'


export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {

const [database, setDatabase] = useState([])

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
          console.log(data, "DATA")
          setDatabase(data);
        })();
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
            // setDatabase(pre => [...pre, {...item, item.stock - quantity}])
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
