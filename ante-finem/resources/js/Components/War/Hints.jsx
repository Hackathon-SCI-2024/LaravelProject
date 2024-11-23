import React from 'react';
import './War.css'; 
import hint_guy from './../../../../assets/20th_century/hint_man.jpg';
import speech_bubble from './../../../../assets/20th_century/speech_war.png';
export default function Hints() {
    const showHint = () =>{

    }
  return (
    <>
    <img src={hint_guy} className='rounded-full h-[10vh] w-[5vw] hint_guy'/>
    <div>
        <img src={speech_bubble} className='h-[10vh] w-[15vw]'></img>
    </div>
    </>
  );
}
