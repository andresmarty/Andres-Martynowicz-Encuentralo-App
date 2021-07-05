import React, { createContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = (props) => {

    const [cart , setCart] = useState([])
    

    // const addItem = (item, quantity) => {
    //     return 
    // }  

    // const removeItem = (itemId) => {

    // }

    // const clear = () => {

    // }

    // const isInCart = () => {

    // }

    return (
        <CartContext.Provider value={[cart, setCart]}>
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
