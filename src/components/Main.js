import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';

function Main() {
  return (
    <div className='main-container'>
      <img src='/images/hero-img.jpg' />
      <div className='main-btns'>
        <Button
          className='btns'>
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Main;