
import React, { useContext, useEffect, useState } from 'react'
import '../styles/cart.css'
import { CartContext } from '../context/CartContext';
import CartRow from './CartRow';
import { Link } from 'react-router-dom';


function Cart() {

  const [setCartProducts, cartProducts, addProducts, subtractProducts, clearProducts, generalTotalPrice, setGeneralTotalPrice] = useContext(CartContext);

  


  useEffect(() => {
    const productsPrice = cartProducts.map(product => product.price * product.cart);
    const totalPriceAdd = productsPrice.reduce((acc, item) => acc + item, 0);
    setGeneralTotalPrice(totalPriceAdd)
  }, [cartProducts])



  return (
    <>
      <div className='cart-view'>

        <h1 className='cart-title'>carrito</h1>
        {
          cartProducts.map(product => <CartRow key={product.id} product={product} pricePerProduct={product.price * product.cart} />)
        }

        <div className='row'>
          <p className='text-row'>total a pagar: ${ generalTotalPrice }</p>

        </div>
        <button className='button-clear' onClick={clearProducts}>vaciar carrito</button>
        <Link className={"linkk"} to={"chekout"}>
        <button className='button-finish' >finalizar compra</button>
        </Link>
        
      </div>

    </>
  )
}

export default Cart