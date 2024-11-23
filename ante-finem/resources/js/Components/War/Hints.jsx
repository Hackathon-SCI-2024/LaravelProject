import React, { useState } from "react";
import "./War.css";
import hint_guy from "./../../../../assets/20th_century/hint_man.jpg";

export default function Hints() {
    // State to control the visibility of the popup
    const [showPopup, setShowPopup] = useState(false);

    // Function to toggle popup visibility
    const togglePopup = () => {
        setShowPopup((prev) => !prev);
    };

    return (
        <>
            <img
                src={hint_guy}
                className="rounded-full h-[10vh] w-[5vw] hint_guy"
                onClick={togglePopup}
                alt="Hint"
            />
            <div className="flex">
                {showPopup && (
                    <div className="popup-container">
                        <div className="popup-content">
                            <div className="popup-header">
                                <img
                                    src={hint_guy}
                                    className="rounded-full h-[5vh] w-[2vw] hint_guy"
                                    onClick={togglePopup}
                                    alt="Hint"
                                />
                                <p className="hint_text">Marian Rejewski</p>
                                <button
                                    onClick={togglePopup}
                                    className="button_close"
                                >
                                    X
                                </button>
                            </div>

                            <p className="hint_text">
                                O! odszyfrowywałem coś takiego kilka dni temu.
                                Wydaje mi się, że to się opiera na zamianie
                                literki o ileś miejsc w alfabecie, tylko o
                                ile....
                            </p>
                        </div>
                    </div>
                )}
                {showPopup && <div className="blur-background" />}
            </div>
        </>
    );
}
