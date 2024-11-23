import React from 'react';
import './Antique.css'; 
import background from './../../../../assets/antiquity/egypt_background.jpg';
import solomon from './../../../../assets/antiquity/solomon.png';
import woman_with_baby from './../../../../assets/antiquity/woman_child.png';
import woman_sad from './../../../../assets/antiquity/woman_sad.png';
export default function Antique_solomon() {
  return (
    <div className="antique-container">
      {/* Circular image on the left */}
      <div className="picture_solomon">
        <img src={solomon} alt="Solomon" />
      </div>
      <div className='block'>
      <div>Dzieciak na pol</div><br></br>
      <div>daj pierwszej babie</div><br></br>
      <div>daj drugiej babie</div><br></br>
      </div>
      <div className="picture_solomon">
      <img src={woman_with_baby} alt="" />
      </div>
      <div className="picture_solomon">
      <img src={woman_sad} alt="" />
      </div>
    </div>
  );
}
