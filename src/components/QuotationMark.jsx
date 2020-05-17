import React from 'react';
import '../styles.css';
import QuotationMark from '../img/quotes.png';

export default () => {
  return (
    <img
      src={QuotationMark}
      alt=''
      className='quotation-mark'
      onDragStart={(e) => e.preventDefault()}
      >
    </img>
  )
};
