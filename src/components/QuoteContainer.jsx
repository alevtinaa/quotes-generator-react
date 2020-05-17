import React from 'react';
import '../styles.css';
import Quote from './Quote';
import Loader from './Loader';
import QuotationMark from './QuotationMark';
import SMButtons from './buttons/SMButtons';

export default (props) => {
  return (
    <div
      className='container'>
      <QuotationMark
        />
        {props.isFetching ?
          <Loader />
          : props.quote
            &&  <Quote
                quote={props.quote}
                />
        }
      <SMButtons
        quote={props.quote}
        />
    </div>
  )
};
