import React, { useState, useRef, useEffect } from "react";
import { evaluate } from "mathjs";
import paperSheet from "./../../../../../assets/medieval/arab_paper.jpg";
import infoImage from "./../../../../../assets/medieval/info.png";
import Popup from "../../Main/Popup";

export default function Baghdad({ setPuzzle }) {
	const greekAlphabet = ["Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω"];
	const operations = ["+", "-", "*"];

	const indoArabicDigits = [
		{ arabic: "0", indoArabic: "٠" },
		{ arabic: "1", indoArabic: "١" },
		{ arabic: "2", indoArabic: "٢" },
		{ arabic: "3", indoArabic: "٣" },
		{ arabic: "4", indoArabic: "٤" },
		{ arabic: "5", indoArabic: "٥" },
		{ arabic: "6", indoArabic: "٦" },
		{ arabic: "7", indoArabic: "٧" },
		{ arabic: "8", indoArabic: "٨" },
		{ arabic: "9", indoArabic: "٩" },
	];

	const toIndoArabic = (input) => {
		const westernToIndoArabicMap = {
			"0": "٠",
			"1": "١",
			"2": "٢",
			"3": "٣",
			"4": "٤",
			"5": "٥",
			"6": "٦",
			"7": "٧",
			"8": "٨",
			"9": "٩",
		};

		return "\u202A" + input.replace(/\d/g, (digit) => westernToIndoArabicMap[digit]);
	};

	const generateRandomLetter = () => {
		const randomIndex = Math.floor(Math.random() * greekAlphabet.length);
		return greekAlphabet[randomIndex];
	};

	const generateRandomOperation = () => {
		const randomIndex = Math.floor(Math.random() * operations.length);
		return operations[randomIndex];
	};

	function cleanAndNormalize(str) {
		return str.replace(/[\u202A-\u202C]/g, "").normalize();
	}

	const [letter1, setLetter1] = useState(generateRandomLetter());
	let letterIndex1 = (greekAlphabet.indexOf(letter1) + 1).toString();
	const [letter2, setLetter2] = useState(generateRandomLetter());
	let letterIndex2 = (greekAlphabet.indexOf(letter2) + 1).toString();
	const [letter3, setLetter3] = useState(generateRandomLetter());
	let letterIndex3 = (greekAlphabet.indexOf(letter3) + 1).toString();

	const [operation1, setOperation1] = useState(generateRandomOperation());
	const [operation2, setOperation2] = useState(generateRandomOperation());

	const [inputText, setText] = useState("");
	const [description, setDescription] = useState(false);
	const [popup, setPopup] = useState(false);

	const [shuffledIndoArabicDigits, setShuffledIndoArabicDigits] = useState([]);

	const result = evaluate(letterIndex1 + operation1 + letterIndex2 + operation2 + letterIndex3);
	const correct =
		toIndoArabic(letterIndex1) + "\u202C" + operation1 + toIndoArabic(letterIndex2) + "\u202C" + operation2 + toIndoArabic(letterIndex3);

	const addDigit = (digit) => {
		const text = inputText + "\u202A" + digit.indoArabic;
		setText(text);
		console.log("in iscorrect");
		console.log(correct + "=" + toIndoArabic(result.toString()));
		console.log(cleanAndNormalize(text));
		console.log(cleanAndNormalize(text) === cleanAndNormalize(correct + "=" + toIndoArabic(result.toString())));
		if (cleanAndNormalize(text) === cleanAndNormalize(correct + "=" + toIndoArabic(result.toString()))) {
			setPopup(true);
		}
	};

	const shuffleArray = (array) => {
		console.log("shuffling");
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array; // Ensure the shuffled array is returned
	};

	const infoText =
		"Złoty wiek islamu zaowocował znacznym postępem w wielu dziedzinach, była to między innymi matematyka i tłumaczenia. W efekcie zawód tłumacza stał się niezwykle prestiżowy i lukratywny, nieustannie było też na niego zapotrzebowanie. Twoim zadaniem jest sprawdzenie, którymi z kolei w alfabecie są podane litery greckie oraz zapisać za ich pomocą równanie i jego wynik cyframi indo-arabskimi";

	useEffect(() => {
		console.log(correct);
		setShuffledIndoArabicDigits(shuffleArray([...indoArabicDigits]));
	}, []);

	const [color, setColor] = useState("none");

	const regenerate = () => {
		setLetter1(generateRandomLetter());
		letterIndex1 = (greekAlphabet.indexOf(letter1) + 1).toString();
		setLetter2(generateRandomLetter());
		letterIndex2 = (greekAlphabet.indexOf(letter2) + 1).toString();
		setLetter3(generateRandomLetter());
		letterIndex3 = (greekAlphabet.indexOf(letter3) + 1).toString();

		setOperation1(generateRandomOperation());
		setOperation2(generateRandomOperation());

		setShuffledIndoArabicDigits(shuffleArray([...indoArabicDigits]));
	};

	return (
		<div id="background" className="w-screen h-screen flex justify-center items-center">
			<div className="top-5 left-5 absolute">
				<button onClick={() => setDescription(!description)}>
					<img src={infoImage} className="rounded-full w-16 h-16" />
				</button>
				{description ? <div className="w-40 text-xs bg-white/60 p-2 rounded-md">{infoText}</div> : <div />}
			</div>

			<div
				id="sheet"
				className="w-[750px] h-[400px] bg-[rgba(254,212,163,0.85)] border-solid border-8 rounded-xl border-[rgb(99,63,31)] flex justify-center items-center gap-10 flex-col"
				style={{ boxShadow: "0 5px 10px 5px rgba(67,20,7,0.8)" }}
			>
				<div id="equation" style={{ fontFamily: "monospace" }}>
					<span className="font-serif text-6xl">{letter1}</span>
					<span className="font-serif text-6xl">{operation1}</span>
					<span className="font-serif text-6xl">{letter2}</span>
					<span className="font-serif text-6xl">{operation2}</span>
					<span className="font-serif text-6xl">{letter3}</span>
				</div>

				<div className="flex gap-5">
					<div className="w-10"></div>
					<input
						type="text"
						value={inputText}
						className="text-left appearance-none bg-transparent border-solid border-2 border-transparent border-b-orange-950 w-[400px] outline-none text-xl placeholder:text-[rgb(190,145,100)]"
						style={{ direction: "rtr", unicodeBidi: "plaintext", backgroundColor: color }}
						placeholder="Wpisz tutaj równanie"
					></input>
					<button
						className="border-solid border-2 border-orange-950 rounded-xl w-10 [-webkit-text-stroke:0.3px]"
						onClick={() => setText("")}
					>
						<i className="bi bi-backspace"></i>
					</button>
				</div>

				<div id="digits" className="flex gap-2">
					{shuffledIndoArabicDigits.map((digit, index) => (
						<button className="border-solid border-2 border-orange-950 rounded-xl w-8" key={index} onClick={() => addDigit(digit)}>
							{digit.indoArabic}
						</button>
					))}
				</div>

				<div id="operations" className="flex gap-2">
					{operations.map((operation, index) => (
						<button
							className="border-solid border-2 border-orange-950 rounded-xl w-8"
							key={index}
							onClick={() => setText((prevText) => prevText + "\u202C" + operation)}
						>
							{operation}
						</button>
					))}
					<button
						className="border-solid border-2 border-orange-950 rounded-xl w-8"
						onClick={() => setText((prevText) => prevText + "\u202C" + "=")}
					>
						{" "}
						={" "}
					</button>
				</div>
			</div>

			{popup && (
				<Popup
					title="Mubarak!"
					content="Wykazałeś szczególną wiedzą matematyczną i lingwistyczną! Powodzenia w przyszłych epokach!"
					bgColor={"bg-orange-800"}
					onClose={() => {
						setColor("none");
						setText("");
						setPopup(false);
						regenerate();
						setPuzzle(13);
					}}
				></Popup>
			)}
		</div>
	);
}
