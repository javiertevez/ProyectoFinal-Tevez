import { React, useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { sendOrder } from '../firebase/firebase';
import End from './end';

function ChekOut() {
  const [setCartProducts, cartProducts, addProducts, subtractProducts, clearProducts, generalTotalPrice, setGeneralTotalPrice] = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
  const [showEnd, setShowEnd] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prev) => ({ ...prev, [name]: value }));
  };

  const validateInputs = () => {
    if (!buyer.name) {
      alert("Por favor, ingresa tu nombre.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!buyer.email || !emailPattern.test(buyer.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false;
    }
    if (!buyer.phone) {
      alert("Por favor, ingresa tu número de teléfono.");
      return false;
    }
    return true;
  };

  const click = () => {
    if (!validateInputs()) {
      return;
    }

    const newOrder = {
      buyer: {
        name: buyer.name,
        email: buyer.email,
        phone: buyer.phone
      },
      date: new Date(),
      items: cartProducts.map(product => ({
        id: product.id || '', 
        name: product.name || '', 
        price: product.price || 0 
      })),
      total: generalTotalPrice || 0 
    };

    
    console.log("Objeto de nueva orden:", newOrder);

    sendOrder(newOrder).then(id => {
      setOrderId(id);
      clearProducts(); 
      setShowEnd(true); 
    }).catch(error => {
      console.error("Error al agregar el documento: ", error);
    });
  };

  return (
    <div className='cart-view'>
      {!showEnd ? ( 
        <>
          <h2 className='cart-title'>Orden de compra</h2>
          <p className='tp'>Total a pagar: ${generalTotalPrice}</p>
          <div className='form-box'>
            <input
              type='text'
              name='name'
              placeholder='Nombre'
              value={buyer.name}
              onChange={handleInputChange}
            />
            <input
              type='email'
              name='email'
              placeholder='Correo electrónico'
              value={buyer.email}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='phone'
              placeholder='Teléfono'
              value={buyer.phone}
              onChange={handleInputChange}
            />
          </div>

          <button className='button-finish' onClick={click}>Enviar orden</button>
        </>
      ) : (
        <End orderId={orderId} /> 
      )}
    </div>
  );
}

export default ChekOut;