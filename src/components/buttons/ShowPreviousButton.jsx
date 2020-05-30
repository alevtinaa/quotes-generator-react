import React from 'react';
import '../../styles.css';
import ShowPreviousButton from '../../img/arrowback-icon.png';

export default (props) => {
  return (
    <button
      className='show-previous-button'
      onClick={() => props.showPrevious()}
      disabled={props.isEmpty}
      >
        <img
          src={ShowPreviousButton}
          alt=''
          onDragStart={(e) => e.preventDefault()}
          className={props.isEmpty ? 'disabled' : ''}
          >
          </img>
    </button>
  )
};
