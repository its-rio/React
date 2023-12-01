import React, {useState} from 'react';
import "./Card.css";
import propTypes from 'prop-types'

function Card({title, price, stock}) {
  let [stockCount, setStockCount] = useState(stock)
  function decrementStock(){
    setStockCount(--stockCount)
    console.log(stockCount);
  }
  return (
    <div className='card'>
        <h1 className='title'>{title}</h1>
        <p className='price'> ${price}</p>
        <p>In stock: {stockCount}</p>
        <p><button onClick={decrementStock}>Add to Cart</button></p>
    </div>
  )
}

Card.propTypes={
  title: propTypes.string,
  price: propTypes.number.isRequired,
  stock: propTypes.number
}

Card.defaultProps = {
  title: "Cuvette basics",
  price: 0,
  stock: 0
}

export default Card