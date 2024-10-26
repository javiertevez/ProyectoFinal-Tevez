import { Link } from 'react-router-dom';
import '../styles/card.css'

function CardComponent({ product, productName }) {

  const { name, price, img } = product;



  return (
    <>

      <Link className='linkk' to={productName}>

        <div className='card'>
          <img className='image' src={img} alt="" />
          <p className='text'>{name}</p>
          <p className='text'>${price}</p>
          
        </div>

      </Link>

    </>
  )
}

export default CardComponent