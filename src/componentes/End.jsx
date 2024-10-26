import React from 'react'

function End({orderId}) {
  return (
    <div className='cart-view'>
        <h1 className='end'>¡orden realizada con éxito!</h1>
        <h2 className='end'>el id de tu orden es: {orderId}</h2>
    </div>
  )
}

export default End