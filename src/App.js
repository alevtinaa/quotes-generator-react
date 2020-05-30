import React, { useState } from 'react';
import './styles.css';
import { randomizer } from './supportingFunctions';
import QuoteContainer from './components/QuoteContainer';
import ShowQuoteButton from './components/buttons/ShowQuoteButton';

export default () => {

  let [quote, setQuote] = useState(
    {
      previous: null,
      current: null,
    }
  );

  let [isFetching, setIsFetching] = useState(false);

  let showQuoteButtonClickHandler = () => {
      setIsFetching(true);
      fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(quotes => {
        setQuote(
          {
            previous: quote.current,
            current: quotes[randomizer(0, quotes.length)],
          }
        );
        setIsFetching(false);
      });
    };

  let showPreviousButtonClickHandler = () => {
    setQuote(
      {
        current: quote.previous,
        previous: null,
      }
    );
  };

  return (
    <div
      className='page'
      >
        <QuoteContainer
          quote={quote}
          showPrevious={showPreviousButtonClickHandler}
          isFetching={isFetching}
          />
        <ShowQuoteButton
          clickhandler={showQuoteButtonClickHandler}
          />
    </div>
  )
};
