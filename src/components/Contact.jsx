import React from 'react';
import frame from '../images/frame.svg';
import '../styles/contact.css';

export default function Contact() {
  return (
    <div className='contact wow animate__animated animate__zoomIn'>
      <h1 className='contact__title'>Subscribe to get the Latest News</h1>
      <p className='contact__text'>
        We recommended you to subscribe to our newspaper, drop your email below to get daily updates about us
      </p>
      <form className='contact__form'>
          <input className='contact__input' placeholder='Enter your email address' type='text' />
          <button className='contact__button'>
            <img src={frame} alt='frame' />
            Subscribe
          </button>
       
      </form>
    </div>
  );
}