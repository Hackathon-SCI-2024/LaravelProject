import React from 'react';
import letter from './../../../../assets/20th_century/hitler_letter.png';
import './War.css'; 
import Hints from './Hints.jsx';
import Letter_js from './Letter.jsx';

export default function War() {
  return (
    <div className="war-container">
      <div className="letter-container">
        <img src={letter} alt="Letter" className="letter" />
        <Letter_js/>
        <Hints />
      </div>
    </div>
  );
}
