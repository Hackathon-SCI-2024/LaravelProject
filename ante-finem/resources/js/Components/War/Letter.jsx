import React, { useState, useEffect } from "react";
import "./War.css";
import Hints from "./Hints";
import letter from "./../../../../assets/20th_century/hitler_letter.png";

export default function Letter() {
	const decodedWords = [
		"Rozpoczac",
		"ofensywe",
		"na",
		"froncie",
		"wschodnim",
		"o",
		"godzinie",
		"4:00",
		"Skupic",
		"atak",
		"na",
		"sektorze",
		"B-19",
		"Wzmocnic",
		"sily",
		"pancerne",
		"Zabezpieczyc",
		"mosty",
		"na",
		"rzece",
		"Dniepr",
		"Zakonczenie",
		"operacji",
		"planowane",
		"na",
		"20:00",
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

	const [inputs, setInputs] = useState(
		encodedWords.reduce((acc, word, index) => {
			acc[index] = "";
			return acc;
		}, {})
	);

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
			(_, index) => filledIndices.includes(index) || decodedWords[index] === "4:00" || decodedWords[index] === "20:00" || isCorrect(index)
		);
	};

	useEffect(() => {
		if (areAllCorrect()) {
			setTimeout(() => {
				alert("Wszystkie słowa zostały poprawnie odgadnięte!");
			}, 100);
		}
	}, [inputs]);

	return (
		<div className="war-container">
			<div className="letter-container">
				<img src={letter} alt="Letter" className="letter" />
				<div className="absolute w-[50vw] p-[4rem] top-0">
					<div className="hints-container">
						<Hints />
					</div>
					<p style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} className="p_text">
						{encodedWords.map((word, index) => (
							<span key={index} style={{ textAlign: "center", margin: "5px" }}>
								{word}
								<br />
								{filledIndices.includes(index) || decodedWords[index] === "4:00" || decodedWords[index] === "20:00" ? (
									<span
										style={{
											display: "block",
											marginTop: "5px",
											fontSize: "1.25rem",
											color: "black",
											userSelect: "none",
											pointerEvents: "none",
										}}
									>
										{decodedWords[index]}
									</span>
								) : isCorrect(index) ? (
									<span
										style={{
											display: "block",
											marginTop: "5px",
											width: "90px",
											height: "35px",
											fontSize: "1.25rem",
											color: "green",
											userSelect: "none",
											pointerEvents: "none",
										}}
									>
										{decodedWords[index]} ✓
									</span>
								) : (
									<input
										type="text"
										value={inputs[index]}
										onChange={(e) => handleInputChange(index, e.target.value)}
										style={{
											marginTop: "5px",
											width: "90px",
											height: "35px",
											fontSize: "1.25rem",
											backgroundColor: "transparent",
											border: "1px solid black",
											borderRadius: "10px",
											color: "black",
										}}
									/>
								)}
							</span>
						))}
					</p>
				</div>
			</div>
		</div>
	);
}
