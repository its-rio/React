import React from 'react';
import "./Card.css";
import propTypes from 'prop-types'

function Card({title, price}) {

  return (
    <div className='card'>
        <h1 className='title'>{title}</h1>
        <p className='price'> ${price}</p>
        <p><button>Add to Cart</button></p>
    </div>
  )
}

Card.propTypes={
  title: propTypes.string,
  price: propTypes.number.isRequired
}

Card.defaultProps = {
  title: "Cuvette basics"
}

export default Card