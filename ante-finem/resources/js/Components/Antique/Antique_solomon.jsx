import React, { useState, useEffect } from 'react';
import './Antique.css';
import background from './../../../../assets/antiquity/solomon_background.jpg';
import solomon from './../../../../assets/antiquity/solomon.png';
import solomon_popup from './../../../../assets/antiquity/solomon_popup.png';
import woman_with_baby from './../../../../assets/antiquity/woman_child.png';
import woman_sad from './../../../../assets/antiquity/woman_sad.png';
import Popup from './../Main/Popup.jsx';

export default function Antique_solomon({ setPuzzle, onLoaded }) {
  useEffect(() => {
		const timer = setTimeout(() => {
			console.log("prehistoric loaded");
			onLoaded?.();
		}, 1000);
	}, []);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [initPopup, setInitPopup] = useState(true); // State for initial popup

  // UseEffect to show initial popup only on component mount
  useEffect(() => {
    if (initPopup) {
      setPopupContent({
        img_popup: solomon_popup,
        title: "Witaj Solomonie!",
        content: "Twoje zadanie to zdecydowanie o losie dziecka, o które walczą dwie kobiety. Co zrobisz, filarze mądrości?",
      });
      setShowPopup(true);
    }
  }, [initPopup]); // Dependency on initPopup ensures it runs only once during initial mount

  // UseEffect to show initial popup only on component mount
  useEffect(() => {
    if (initPopup) {
      setPopupContent({
        img_popup: solomon_popup,
        title: "Witaj Solomonie!",
        content: "Twoje zadanie to zdecydowanie o losie dziecka, o które walczą dwie kobiety. Co zrobisz, filarze mądrości?",
      });
      setShowPopup(true);
    }
  }, [initPopup]); // Dependency on initPopup ensures it runs only once during initial mount

  // Function to open any other popup with dynamic content
  const openPopup = (title, content) => {
    setPopupContent({ title, content });
    setShowPopup(true);
  };

  // Close popup and set initPopup to false to prevent further initial popups
  const closePopup = () => {
    setShowPopup(false);
    if (initPopup) setInitPopup(false); // Set to false to prevent future initial popups
    setPopupContent(null); // Clear the content
  };

  // Decision making logic
  const makeDecision = (decision) => {
    if (decision === "Give half of the child to each woman") {
      openPopup("Mądra decyzja!", "Prawdziwa matka błagała o ocalenie dziecka, ujawniając swoją tożsamość. Mądrość zwyciężyła!");
      setTimeout(() => {
        setPuzzle(9);
      }, 3000);
    } else {
      openPopup("Wywiązuje się kłótnia!", "Kobiety zaczęły kłócić się zaciekle, a twoja decyzja nie rozwiązała sporu. Spróbuj ponownie!");
    }
  };

  return (
    <div className="antique-container">
      {/* Show popup if active */}
      {showPopup && (
        <Popup
          title={popupContent?.title}
          content={popupContent?.content}
          img_popup={popupContent?.img_popup}
          bgColor={"bg-yellow-200"}
          onClose={() => {
            closePopup();
          }}
        />
      )}

      <div className="w-full h-screen flex justify-center items-center relative bg-center bg-cover" style={{ backgroundImage: `url(${background})` }}>
        {/* Show popup if active */}
        {showPopup && (
          <Popup
            title={popupContent?.title}
            content={popupContent?.content}
            img_popup={popupContent?.img_popup}
            onClose={closePopup}
          />
        )}

        <div className="absolute flex w-screen h-screen justify-between items-end">
          {/* Women positioned lower and on either side */}
          <div
            className="w-[20vw] h-[30vw] bg-cover bg-center bg-no-repeat cursor-pointer [transform-origin:bottom_left] transition-transform hover:[transform:scale(110%)]" style={{ backgroundImage: `url(${woman_sad})` }}
            onClick={() => openPopup(
              "Smutna kobieta",
              "Ta kobieta wygląda na załamana, ale twierdzi, że dziecko jest jej."
            )}
          >
          </div>
          <div
            className="w-[20vw] h-[30vw] bg-cover bg-center bg-no-repeat cursor-pointer [transform-origin:bottom_right] transition-transform hover:[transform:scale(110%)]" style={{ backgroundImage: `url(${woman_with_baby})` }}
            onClick={() => openPopup(
              "Kobieta z dzieckiem",
              "Ta kobieta trzyma dziecko i upiera się, że to jej."
            )}
          >
          </div>
        </div>

        {/* Solomon in the center */}
        <div className="absolute w-60 flex justify-center items-center flex-col [transform:translateX(1vw)]">

          <div className="">
            {/* Decision buttons */}
            <div className='ml-2 flex flex-col items-center gap-2'>
              <div className="w-[300px] h-fit py-2 bg-amber-950 text-slate-50 border-solid border-[3px] border-amber-900 rounded-3xl flex justify-center items-center">
                <h1 className="text-2xl font-bold">Co robisz?</h1>
              </div>
              <button className="w-[300px] bg-amber-950 text-slate-50 border-solid border-[3px] border-amber-900 rounded-3xl hover:bg-amber-900 transition-colors" onClick={() => makeDecision('Give the child to the woman on the left')}>
                Daj dziecko kobiecie po lewej stronie.
              </button>
              <button className="w-[300px] bg-amber-950 text-slate-50 border-solid border-[3px] border-amber-900 rounded-3xl hover:bg-amber-900 transition-colors" onClick={() => makeDecision('Give the child to the woman on the right')}>
                Daj dziecko kobiecie po prawej stronie.
              </button>
              <button className="w-[300px] bg-amber-950 text-slate-50 border-solid border-[3px] border-amber-900 rounded-3xl hover:bg-amber-900 transition-colors" onClick={() => makeDecision('Give half of the child to each woman')}>
                Daj połowę dziecka każdej kobiecie.
              </button>
            </div>
          </div>

          <div className="h-[10vh]"></div>

          <div className="w-[30vh] h-[30vh] bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${solomon})` }}></div>

          <div className="h-[20vh]"></div>
        </div>

      </div>
    </div>
  );
}
