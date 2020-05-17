import React from 'react';
import '../../styles.css';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import FacebookIcon from '../../img/facebook-icon.png';
import LinkedinIcon from '../../img/linkedin-icon.png';
import TwitterIcon from '../../img/twitter-icon.png';
import SMButton from './SMButton';

export default (props) => {
  let textToShare = () => {
    return (
      props.quote ?
        `${props.quote.text}
        -${props.quote.author}`
        : `Lots of inspirational quotes here!`
      )
  };

  return (
    <div
      className='sm-buttons'
      >
      <FacebookShareButton
        url='https://github.com/alevtinaa/random-quote-react.git/'
        children={
          <SMButton
          src={FacebookIcon}
          />
          }
        quote={textToShare()}
        />
      <LinkedinShareButton
        url='https://github.com/alevtinaa/random-quote-react.git/'
        children={
          <SMButton
          src={LinkedinIcon}
          />
          }
        summary={textToShare()}
        />
      <TwitterShareButton
        url='https://github.com/alevtinaa/random-quote-react.git/'
        children={
          <SMButton
          src={TwitterIcon}
          />
          }
        title={textToShare()}
        />
    </div>
  )
};
