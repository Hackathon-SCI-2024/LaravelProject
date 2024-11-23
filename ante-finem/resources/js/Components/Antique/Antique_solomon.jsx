import React, { useState, useEffect } from 'react';
import './Antique.css';
import background from './../../../../assets/antiquity/egypt_background.jpg';
import solomon from './../../../../assets/antiquity/solomon.png';
import solomon_popup from './../../../../assets/antiquity/solomon_popup.png';
import woman_with_baby from './../../../../assets/antiquity/woman_child.png';
import woman_sad from './../../../../assets/antiquity/woman_sad.png';
import Popup from './../Main/Popup.jsx';


export default function Antique_solomon() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [initPopup, setInitPopup] = useState(true); // State for initial popup

  // UseEffect to show initial popup only on component mount
  useEffect(() => {
    if (initPopup) {
      setPopupContent({
        img_popup : solomon_popup,
        title: "Witaj Solomonie!",
        content: "Twoje zadanie to zdecydowanie o losie dziecka, o które walczą dwie kobiety. Co zrobisz, filarze mądrości?",
      });
      setShowPopup(true);
    }
  }, [initPopup]); // Dependency on initPopup ensures it runs only once during initial mount

  // Close popup and set initPopup to false to prevent further initial popups
  const closePopup = () => {
    setShowPopup(false);
    if (initPopup) setInitPopup(false); // Set to false to prevent future initial popups
    setPopupContent(null); // Clear the content
  };

  // Function to open any other popup with dynamic content
  const openPopup = (title, content) => {
    setPopupContent({ title, content });
    setShowPopup(true);
  };

  // Decision making logic
  const makeDecision = (decision) => {
    if (decision === 'Give half of the child to each woman') {
      openPopup(
        "Mądra decyzja!",
        "Prawdziwa matka błagała o ocalenie dziecka, ujawniając swoją tożsamość. Mądrość zwyciężyła!"
      );
    } else {
      openPopup(
        "Wywiązuje się kłótnia!",
        "Kobiety zaczęły kłócić się zaciekle, a twoja decyzja nie rozwiązała sporu. Spróbuj ponownie!"
      );
    }
  };

  return (
    <div className="antique-container">
      {/* Show popup if active */}
      {showPopup && (
  <Popup 
    title={popupContent?.title} 
    content={popupContent?.content} 
    img_popup = {popupContent?.img_popup}
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
          Daj dziecko kobiecie po lewej stronie.
          </button>
        </div>
        <br />
        <div>
          <div className='bg-white rounded-lg'>
            <button onClick={() => makeDecision('Give the child to the woman on the right')}>
            Daj dziecko kobiecie po prawej stronie.
            </button>
          </div>
        </div>
        <br />
        <div>
          <div className='bg-white rounded-lg'>
            <button onClick={() => makeDecision('Give half of the child to each woman')}>
            Daj połowę dziecka każdej kobiecie.
            </button>
          </div>
        </div>
      </div>

      {/* Women positioned lower and on either side */}
      <div 
        className="picture_moms mother-left" 
        onClick={() => openPopup(
          "Smutna kobieta",
          "Ta kobieta wygląda na załamana, ale twierdzi, że dziecko jest jej."
        )}
      >
        <img src={woman_sad} alt="Sad woman" />
      </div>
      <div 
        className="picture_moms mother-right" 
        onClick={() => openPopup(
          "Kobieta z dzieckiem",
          "Ta kobieta trzyma dziecko i upiera się, że to jej."
        )}
      >
        <img src={woman_with_baby} alt="Woman with baby" />
      </div>
    </div>
  );
}
