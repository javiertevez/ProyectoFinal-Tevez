import { createContext, useEffect, useState } from "react";
import { getProducts } from "../firebase/firebase";

export const CartContext = createContext(false);

export function CartProvider({ children }) {

    const [generalTotalPrice, setGeneralTotalPrice] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);

    const addProducts = (item) => {
        setCartProducts(prevCartProducts => {
            const existingProduct = prevCartProducts.find(product => product.name === item.name); 

            if (existingProduct) {
                
                return prevCartProducts.map(product =>
                    product.name === item.name ? { ...product, cart: product.cart + 1 } : product
                );
            } else {
               
                return [...prevCartProducts, { ...item, cart: 1 }]; 
            }
        });
    };

    const subtractProducts = (item) => {
        setCartProducts(prevCartProducts => {
            const existingProduct = prevCartProducts.find(product => product.name === item.name);

            if (existingProduct) {
                
                if (existingProduct.cart > 1) {
                    return prevCartProducts.map(product =>
                        product.name === item.name ? { ...product, cart: product.cart - 1 } : product
                    );
                } else {
                    
                    return prevCartProducts.filter(product => product.name !== item.name);
                }
            }

            
            return prevCartProducts;
        });
    };
    const clearProducts = () => {
        setCartProducts([])
    };


    return (
        <CartContext.Provider value={[setCartProducts, cartProducts, addProducts, subtractProducts, clearProducts, generalTotalPrice, setGeneralTotalPrice]}>

            {children}
        </CartContext.Provider>
    )
}