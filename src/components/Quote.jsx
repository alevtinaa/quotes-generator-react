import React from 'react';
import '../styles.css';

export default (props) => {
  return (
    <>
      <div
        className='quote-text'
        >
          {props.quote.text}
          </div>
      <div
        className='quote-author'
        >
          {`- ${props.quote.author ? props.quote.author : 'Unknown'}`}
          </div>
    </>
  )
};
