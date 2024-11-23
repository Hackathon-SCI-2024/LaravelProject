import React, { useState, useEffect } from 'react';
import './Antique.css';
import background from './../../../../assets/antiquity/egypt_background.jpg';
import solomon from './../../../../assets/antiquity/solomon.png';
import solomon_popup from './../../../../assets/antiquity/solomon_popup.png';
import woman_with_baby from './../../../../assets/antiquity/woman_child.png';
import woman_sad from './../../../../assets/antiquity/woman_sad.png';

const Popup = ({ title, content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="flex">
          <h2 className="hello_solomon"><b>{title}</b></h2>
        </div>
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default function Antique_solomon() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [initPopup, setInitPopup] = useState(true); // State for initial popup

  useEffect(() => {
    // Show the initial popup on component mount
    if (initPopup) {
      setPopupContent({
        title: "Hello Solomon!",
        content: "Your task is to decide the fate of the child claimed by two women. What will you do, pillar of wisdom?",
      });
      setShowPopup(true);
    }
  }, [initPopup]);

  const closePopup = () => {
    setShowPopup(false);
    if (initPopup) setInitPopup(false); // Close initial popup
    setPopupContent(null);
  };

  const openPopup = (title, content) => {
    setPopupContent({ title, content });
    setShowPopup(true);
  };

  const makeDecision = (decision) => {
    if (decision === 'Give half of the child to each woman') {
      openPopup(
        "Wise Decision!",
        "The true mother pleaded to save the child, revealing her identity. Wisdom has prevailed!"
      );
    } else {
      openPopup(
        "Argument Breaks Out!",
        "The women started arguing fiercely, and your decision failed to settle the dispute. Try again!"
      );
    }
  };

  return (
    <div className="antique-container">
      {/* Show popup if active */}
      {showPopup && (
        <Popup 
          title={popupContent.title} 
          content={popupContent.content} 
          onClose={closePopup} 
        />
      )}

      {/* Solomon in the center */}
      <div className="picture_solomon">
        <img src={solomon} alt="Solomon" />
      </div>

      {/* Decision buttons */}
      <div className='ml-2'>
        <div className='bg-white rounded-lg'>
          <button onClick={() => makeDecision('Give the child to the woman on the left')}>
            Give child to the woman on the left
          </button>
        </div>
        <br />
        <div>
          <div className='bg-white rounded-lg'>
            <button onClick={() => makeDecision('Give the child to the woman on the right')}>
              Give child to the woman on the right
            </button>
          </div>
        </div>
        <br />
        <div>
          <div className='bg-white rounded-lg'>
            <button onClick={() => makeDecision('Give half of the child to each woman')}>
              Give half of the child to each woman
            </button>
          </div>
        </div>
      </div>

      {/* Women positioned lower and on either side */}
      <div 
        className="picture_moms mother-left" 
        onClick={() => openPopup(
          "Sad Woman",
          "This woman looks heartbroken but claims the child is hers."
        )}
      >
        <img src={woman_sad} alt="Sad woman" />
      </div>
      <div 
        className="picture_moms mother-right" 
        onClick={() => openPopup(
          "Woman with Baby",
          "This woman is holding the baby and insists it is hers."
        )}
      >
        <img src={woman_with_baby} alt="Woman with baby" />
      </div>
    </div>
  );
}
