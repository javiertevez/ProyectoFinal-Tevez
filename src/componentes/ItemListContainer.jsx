
import '../App.css'
import React from 'react'
import { useContext } from 'react'
import CardComponent from './CardComponent'


import { ProductContext } from '../context/ProductContext.jsx'

function ItemListContainer({ section }) {

  const products = useContext(ProductContext);


  const filterBySection = prod => prod.section === section;



  const sectionIsEmpty = (section === '');



  return (
    <section className='cardSection'>
      <h2 className='productos'>Productos</h2>
      <section className='cardSection2'>
        {

          (sectionIsEmpty ?
            products :
            products.filter(filterBySection)).map(
              product => <CardComponent key={product.id} product={product}
                section={product.section} productName={product.name} />
            )


        }



      </section>

    </section>

  )
}

export default ItemListContainer