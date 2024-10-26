import React from 'react'

function CartRow({ product, pricePerProduct }) {



    return (
        <div className='row'>
            <p className='text-row'>cantidad:  {product.cart}</p>
            <p className='text-row'>producto:  {product.name}</p>
            <p className='text-row'>precio:  ${pricePerProduct}</p>

        </div>
    )
}

export default CartRow