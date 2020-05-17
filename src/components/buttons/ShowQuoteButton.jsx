import React from 'react';
import '../../styles.css';

export default (props) => {
  return (
    <button
      className='show-quote-button'
      onClick={props.clickhandler}
      >
        SHOW QUOTE
    </button>
  )
};
