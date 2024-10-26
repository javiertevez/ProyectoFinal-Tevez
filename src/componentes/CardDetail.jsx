import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import '../styles/detail.css';
import { CartContext } from '../context/CartContext';

function CardDetail() {
  const { productName } = useParams();
  const [p, setP] = useState(null); 
  const [quantity, setQuantity] = useState(0);
 

  const products = useContext(ProductContext);
  const [setCartProducts, cartProducts, addProducts, subtractProducts, clearProducts] = useContext(CartContext);

  
  useEffect(() => {
    const foundP = products.find(prod => prod.name === productName);
    setP(foundP || null);
  }, [products, productName]);

  
  useEffect(() => {
    const quantityCardProduct = cartProducts.filter(product => product.name === productName)
    const productQuantity = quantityCardProduct.reduce((accumulator, product) => accumulator + (product.cart || 0), 0);
    setQuantity(productQuantity);
  }, [cartProducts]);

  const click = () => {
    if (p) {
      addProducts(p);
    }
  };

  const click2 = () => {
    if (p) {
      subtractProducts(p); 
    }
  };

  if (!p) {
    return <div>Cargando...</div>; 
  }

  return (
    <section className='detail-section'>
      <div className='product-detail-box'>
        <div className='img-box'>
          <img className='img-detail' src={p.img} alt={p.name} />
        </div>
        <div className='text-section'>
          <h1 className='title'>{productName}</h1>
          <div className='description-box'>
            <p>{p.description}</p>
          </div>
          <div className='price-box'>
            <p className='price'>${p.price}</p>
          </div>
          <div className='caja-agregar-carrito'>
            <button className='boton-agregar' onClick={click}>+</button>
            <p className='carrito-cantidad'>{quantity}</p>
            <button className='boton-agregar' onClick={click2}>-</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardDetail;