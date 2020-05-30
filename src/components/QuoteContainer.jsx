import React from 'react';
import '../styles.css';
import Quote from './Quote';
import Loader from './Loader';
import QuotationMark from './QuotationMark';
import SMButtons from './buttons/SMButtons';
import ShowPreviousButton from './buttons/ShowPreviousButton';

export default (props) => {
  return (
    <div
      className='container'>
      <QuotationMark
        />
        <ShowPreviousButton
          showPrevious={props.showPrevious}
          isEmpty={!props.quote.previous}
          />
          {props.isFetching ?
            <Loader />
            : props.quote.current
              &&  <Quote
                  quote={props.quote.current}
                  />
                }
      <SMButtons
        quote={props.quote.current}
        />
    </div>
  )
};
