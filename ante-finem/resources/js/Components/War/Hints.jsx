import React, { useState } from "react";
import "./War.css";
import hint_guy from "./../../../../assets/20th_century/hint_man.jpg";
import Popup from "./../Main/Popup";
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
                    <Popup
                        title="Marian Rejewski"
                        content="O! odszyfrowywałem coś takiego kilka dni temu.
                                Wydaje mi się, że to się opiera na zamianie
                                literki o ileś miejsc w alfabecie, tylko o
                                ile...."
                        img_popup={hint_guy}
                        onClose={togglePopup}
                    />
                )}
            </div>
        </>
    );
}
