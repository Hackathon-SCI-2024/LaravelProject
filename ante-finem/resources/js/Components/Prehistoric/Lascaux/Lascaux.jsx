import React, { useState, useEffect } from 'react';
import lascaux_1 from './../../../../../assets/prehistory/lascaux_1.jpg';
import lascaux_2 from './../../../../../assets/prehistory/lascaux_2.jpg';
import lascaux_3 from './../../../../../assets/prehistory/lascaux_3.jpg';
import lascaux_4 from './../../../../../assets/prehistory/lascaux_4.jpg';
import lascaux_5 from './../../../../../assets/prehistory/lascaux_5.jpg';
import lascaux_6 from './../../../../../assets/prehistory/lascaux_6.jpg';
import questionMark from "./../../../../../assets/prehistory/question-fill.png"

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
const Popup = ({ title, content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="flex">
          <h2 className="popup_won"><b>{title}</b></h2>
        </div>
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
const Lascaux = () => {
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

  const lascauxDescription = "Lascaux to jaskinia krasowa w południowo-zachodniej Francji, w której odkryto rysunki i malowidła wykonane na ścianach w okresie paleolitu. Twoim zadaniem jest ułożenie puzzli przedstawiających te malowidła."

  return (
    <>
      <div className="absolute top-5 left-5">
        <button onClick={() => setDescription(!description)}>
            <img className="w-8 h-8" src={questionMark} />
        </button>
        {description ? (
          <div className="w-32 text-xs bg-white/60 p-2 rounded-md">
            {lascauxDescription}
          </div>
        ) : (<div />)}
      </div>
    <div style={{ textAlign: 'center'}}>
      {isWinner ? (
          <Popup
            title="Wygrałeś!"
            content="Gratulacje! Rozwiązałeś zagadkę!"
            onClose={() => setIsWinner(false)}
          />
        ) : (
        <div class="ml-[30vw] mt-[15vh]"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 200px)`,
            gap: '1px',
          }}
        >
          {tiles.map((tile, index) => (
            <div
              key={index}
              onClick={() => moveTile(index)}
              style={{
                width: '200px',
                height: '200px',
                backgroundColor: tile === 0 ? 'rgba(255, 255, 255, 0.6)' : '#ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                cursor: tile === 0 ? 'default' : 'pointer',
                border: '1px solid #ccc',
                backgroundImage: tile !== 0 
                  ? `url(${images[tile - 1]})` 
                  : 'none',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {tile !== 0 ? '' : ''}
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Lascaux;
