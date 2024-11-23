import React, { useState, useEffect } from "react";
import lascaux_1 from "./../../../../../assets/prehistory/lascaux_1.jpg";
import lascaux_2 from "./../../../../../assets/prehistory/lascaux_2.jpg";
import lascaux_3 from "./../../../../../assets/prehistory/lascaux_3.jpg";
import lascaux_4 from "./../../../../../assets/prehistory/lascaux_4.jpg";
import lascaux_5 from "./../../../../../assets/prehistory/lascaux_5.jpg";
import lascaux_6 from "./../../../../../assets/prehistory/lascaux_6.jpg";
import questionMark from "./../../../../../assets/prehistory/question-fill.png";
import lascauxStoneTexture from "./../../../../../assets/prehistory/lascaux_stone_texture.jpg";
import Popup from "../../Main/Popup.jsx";

// Funkcja do generowania pustej tablicy dla puzzle 2x3
const generatePuzzle = () => {
	const rows = 2; // Wiersze
	const cols = 3; // Kolumny
	const size = rows * cols;
	let numbers = Array.from({ length: size }, (_, i) => i);

	// Mieszanie elementów
	for (let i = numbers.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
	}
	return numbers;
};

const Lascaux = ({ setPuzzle, onLoaded }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			console.log("prehistoric loaded");
			onLoaded?.();
		}, 1000);
	}, []);

	const rows = 2;
	const cols = 3;
	const images = [lascaux_1, lascaux_2, lascaux_3, lascaux_4, lascaux_5, lascaux_6];
	const [tiles, setTiles] = useState(generatePuzzle());
	const [emptyIndex, setEmptyIndex] = useState(tiles.indexOf(0)); // Indeks pustego pola
	const [isWinner, setIsWinner] = useState(false); // Flaga wygranej
	const [description, setDescription] = useState(false);

	// Funkcja do sprawdzania sąsiednich pól
	const getNeighborIndices = (index) => {
		const neighbors = [];
		const row = Math.floor(index / cols);
		const col = index % cols;

		if (row > 0) neighbors.push(index - cols); // Góra
		if (row < rows - 1) neighbors.push(index + cols); // Dół
		if (col > 0) neighbors.push(index - 1); // Lewo
		if (col < cols - 1) neighbors.push(index + 1); // Prawo

		return neighbors;
	};

	// Funkcja do zamiany miejscami płytek
	const moveTile = (index) => {
		const neighbors = getNeighborIndices(emptyIndex);
		if (neighbors.includes(index)) {
			const newTiles = [...tiles];
			newTiles[emptyIndex] = newTiles[index];
			newTiles[index] = 0;
			setTiles(newTiles);
			setEmptyIndex(index);
		}
	};

	// Funkcja sprawdzająca, czy układ puzzli jest poprawny
	const checkWinner = () => {
		for (let i = 0; i < rows * cols - 1; i++) {
			if (tiles[i] !== i + 1) {
				return false;
			}
		}
		return tiles[rows * cols - 1] === 0; // Ostatni element musi być pusty
	};

	// Sprawdzenie układu puzzli przy każdej zmianie
	useEffect(() => {
		if (checkWinner()) {
			setIsWinner(true);
		}
	}, [tiles]);

	const lascauxDescription =
		"Lascaux to jaskinia krasowa w południowo-zachodniej Francji, w której odkryto rysunki i malowidła wykonane na ścianach w okresie paleolitu. Twoim zadaniem jest ułożenie puzzli przedstawiających te malowidła.";

	return (
		<>
			<div className="absolute top-5 left-5">
				<button onClick={() => setDescription(!description)}>
					<img className="w-8 h-8" src={questionMark} />
				</button>
				{description ? (
					<div className="w-60 bg-white/50 p-2 rounded-md">
						<p className="text-md text-justify">{lascauxDescription}</p>
					</div>
				) : (
					<div />
				)}
			</div>
			<div className="text-center w-full h-screen flex justify-center items-center">
				{isWinner ? (
					<Popup
						title="Wygrałeś!"
						content="Gratulacje! Rozwiązałeś zagadkę!"
                        bgColor={"bg-orange-500"}
						onClose={() => {
							setIsWinner(false);
							setPuzzle(5);
						}}
					/>
				) : (
					<div
						className="p-12 bg-cover bg-center rounded-3xl bg-[rgb(79,69,55)]"
						style={{
							display: "grid",
							gridTemplateColumns: `repeat(${cols}, 200px)`,
							gap: "5px",
							boxShadow: "0 5px 10px 5px rgb(93,76,60)",
						}}
					>
						{tiles.map((tile, index) => (
							<div
								key={index}
								onClick={() => moveTile(index)}
								style={{
									width: "200px",
									height: "200px",
									backgroundColor: tile === 0 ? "rgba(102,102,102,0.35)" : "#ddd",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "24px",
									cursor: tile === 0 ? "default" : "pointer",
									backgroundImage: tile !== 0 ? `url(${images[tile - 1]})` : "none",
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									borderRadius: "10px",
									backdropFilter: "blur(5px)",
								}}
							>
								{tile !== 0 ? "" : ""}
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default Lascaux;
