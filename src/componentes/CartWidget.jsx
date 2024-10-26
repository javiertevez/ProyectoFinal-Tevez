import { Link } from 'react-router-dom'
import '../styles/cart.css'
import {React, useContext, useEffect, useState} from 'react'
import { CartContext } from '../context/CartContext';


function CartWidget() {

    const [setCartProducts, cartProducts, addProducts, subtractProducts, clearProducts] = useContext(CartContext);
const [quantity, setQuantity] = useState(0);




    useEffect(() => {
        const totalQuantity = cartProducts.reduce((accumulator, product) => accumulator + (product.cart || 0), 0);
        setQuantity(totalQuantity);
        
      }, [cartProducts]);


    return (
        <Link className='linkk' to={"cart"}>
            <div className='caja-carrito'>
                <img className='carrito' src="https://p7.hiclipart.com/preview/1022/32/945/shopping-cart-logo-icon-shopping-cart.jpg" alt="carrito" />
                <p className='numero-carrito'>{ quantity }</p>
            </div>

        </Link>
    )
}

export default CartWidget