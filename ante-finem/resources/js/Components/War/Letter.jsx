import React, { useState, useEffect } from "react";
import Hints from "./Hints";
import letter from "./../../../../assets/20th_century/ww2_paper_texture.png";
import Popup from "./../Main/Popup";
import "./War.css";

export default function Letter() {
    const decodedWords = [
        "Rozpoczac", "ofensywe", "na", "froncie", "wschodnim", "o", "godzinie", "4:00",
        "Skupic", "atak", "na", "sektorze", "B-19", "Wzmocnic", "sily", "pancerne",
        "Zabezpieczyc", "mosty", "na", "rzece", "Dniepr", "Zakonczenie", "operacji",
        "planowane", "na", "20:00"
    ];

    const shiftChar = (char) => {
        if (/[a-zA-Z]/.test(char)) {
            const isUpperCase = char === char.toUpperCase();
            const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
            const offset = 2;
            return String.fromCharCode(((char.charCodeAt(0) - base + offset) % 26) + base);
        }
        return char;
    };

    const encodedWords = decodedWords.map((word) => word.split("").map(shiftChar).join(""));

    const getRandomFilledCount = () => Math.floor(Math.random() * 4) + 3;

    const [filledIndices, setFilledIndices] = useState([]);
    const [inputs, setInputs] = useState(
        encodedWords.reduce((acc, word, index) => {
            acc[index] = "";
            return acc;
        }, {})
    );
    const [showPopup, setShowPopup] = useState(false);
    const [showInitPopup, setShowInitPopup] = useState(true);

    useEffect(() => {
        const count = getRandomFilledCount();
        const indices = [];
        while (indices.length < count) {
            const randomIndex = Math.floor(Math.random() * encodedWords.length);
            if (!indices.includes(randomIndex)) {
                indices.push(randomIndex);
            }
        }
        setFilledIndices(indices);
    }, []);

    const handleInputChange = (index, value) => {
        setInputs((prevState) => ({
            ...prevState,
            [index]: value,
        }));
    };

    const isCorrect = (index) => {
        return inputs[index].toLowerCase() === decodedWords[index].toLowerCase();
    };

    const areAllCorrect = () => {
        return encodedWords.every(
            (_, index) =>
                filledIndices.includes(index) ||
                decodedWords[index] === "4:00" ||
                decodedWords[index] === "20:00" ||
                isCorrect(index)
        );
    };

    useEffect(() => {
        if (areAllCorrect()) {
            setTimeout(() => {
                setShowPopup(true);
            }, 100);
        }
    }, [inputs]);

    const closePopup = () => setShowPopup(false);
    const closeInitPopup = () => setShowInitPopup(false);

    return (
        <div className="flex justify-center items-center h-screen">
            {/* Initial Popup */}
            {showInitPopup && (
                <Popup
                    title="Podróżniku!"
                    content="Jesteś w zespole osób, które muszą rozszyfrować szyfr Hitlera. Powodzenia! Cała Europa jest teraz w twoich rękach."
                    onClose={closeInitPopup}
                />
            )}

            {/* Main Letter */}
            <div className="relative w-[60%] h-[85%] aspect-[4/3] overflow-hidden rounded-lg bg-center bg-no-repeat [background-size:_100%_100%] bottom-8" style={{ backgroundImage: `url(${letter})` }}>

                {/* German Mail Structure */}
                <div className="absolute inset-0 flex flex-col px-20 py-12">
                    {/* Header */}
                    <div className="text-center mb-4 border-b border-gray-800 pb-2 font-dancing-script">
                        <h1 className="text-3xl font-bold uppercase">
                            Geheime Nachricht
                        </h1>
                        <p className="text-base italic text-gray-700">Absender: Hauptmann Klaus Richter</p>
                    </div>

                    {/* Body Section */}
                    <div className="flex-1">
                        <p className="text-2xl font-dancing-script leading-relaxed h-full text-gray-900 text-center">
                            {encodedWords.map((word, index) => (
                                <span key={index} className="inline-block m-2">
                                    {word}
                                    <br />
                                    {filledIndices.includes(index) ||
                                    decodedWords[index] === "4:00" ||
                                    decodedWords[index] === "20:00" ? (
                                        <span className="block text-black font-bold">
                                            {decodedWords[index]}
                                        </span>
                                    ) : isCorrect(index) ? (
                                        <span className="block text-green-600 font-bold">
                                            {decodedWords[index]} ✓
                                        </span>
                                    ) : (
                                        <input
                                            type="text"
                                            className="block w-20 text-center border-b border-gray-500 bg-transparent text-gray-800 focus:outline-none"
                                            value={inputs[index]}
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                        />
                                    )}
                                </span>
                            ))}
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 text-right font-dancing-script">
                        <p className="text-md">Mit freundlichen Grüßen,</p>
                        <p className="font-bold text-xl">Hauptmann Klaus Richter</p>
                    </div>
                </div>
            </div>

            {/* Completion Popup */}
            {showPopup && (
                <Popup
                    title="Gratulacje!"
                    content="Wszystkie słowa zostały poprawnie odgadnięte!"
                    onClose={closePopup}
                />
            )}
        </div>
    );
}
