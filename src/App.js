import React, { useState } from 'react';
import './styles.css';
import QuoteContainer from './components/QuoteContainer';
import ShowQuoteButton from './components/buttons/ShowQuoteButton';

export default () => {

  let [quote, setQuote] = useState(null);
  let [isFetching, setIsFetching] = useState(false);

  let randomizer = (min, max) => Math.floor(Math.random() * (max - min) + min);

  let clickhandler = () => {
      setIsFetching(true);
      fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(quotes => {
        setQuote(quotes[randomizer(0, quotes.length)]);
        setIsFetching(false);
      });
    };

  return (
    <div
      className='page'
      >
        <QuoteContainer
          quote={quote}
          isFetching={isFetching}
          />
        <ShowQuoteButton
          clickhandler={clickhandler}
          />
    </div>
  )
};
