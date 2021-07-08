import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {

    const [cart , setCart] = useState([])
    
    const isInCart = id => cart.some(item => item.id === id)

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            const newCart = cart.map(cartElement => {
                if(cartElement.id === item.id){
                    return {...cartElement, quantity: cartElement.quantity + quantity}
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

    return (
        <CartContext.Provider value={{ cart, setCart, clearCart, addToCart }}>
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
