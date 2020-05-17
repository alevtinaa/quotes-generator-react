import React from 'react';
import '../../styles.css';

export default (props) => {
  return (
      <div
        className='sm-button'
        >
          <img
          src={props.src}
          alt=''
          onDragStart={(e) => e.preventDefault()}
          />
      </div>
  )
};
