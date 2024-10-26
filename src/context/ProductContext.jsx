import { createContext, useEffect, useState } from "react";

import { getProducts } from "../firebase/firebase";

export const ProductContext = createContext(false);

export function ProductsProvider({ children }) {
    

    const [products, setProducts] = useState([]);

    useEffect(() => {
       getProducts().then(prod => setProducts(prod));
    }, [])
    

    return (
        <ProductContext.Provider value={products}>

            {children}
        </ProductContext.Provider>
    )
}