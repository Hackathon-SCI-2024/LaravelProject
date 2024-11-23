//Technologies

import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

// ---
//Components imports

import Prehistoric from "../Prehistoric/Prehistoric";
import Antique from "../Antique/Antique";
import Medieval from "../Medieval/Medieval";
import Baghdad from "../Medieval/Baghdad/Baghdad";
import War from "../War/War";
import Home from "./Home";
import Slider from "./Slider";
import Letter from "../War/Letter";
import Antique_solomon from "../Antique/Antique_solomon";
import Lascaux from "../Prehistoric/Lascaux/Lascaux";

// ---
// Images imports

import prehistoricImage from "../../../../assets/prehistory/prehistory_background.jpg";
import RomeImage from "../../../../assets/antiquity/egypt_background.jpg";
import BaghdadImage from "../../../../assets/medieval/baghdad_backgroundjpg.jpg";
import warImage from "../../../../assets/20th_century/war_background.jpg";
import war2Image from "../../../../assets/20th_century/war_background2.jpg";
import lascauxImage from "../../../../assets/prehistory/lascaux_background.jpg";

// ---

export default function Main() {
	const [puzzle, setPuzzle] = React.useState(0);
	const puzzles = [
		<Home setPuzzle={setPuzzle} />,
		<Prehistoric setPuzzle={setPuzzle} />,
		<Lascaux></Lascaux>,
		"",
		"",
		<Antique setPuzzle={setPuzzle}/>,
		<Antique_solomon />,
		"",
		"",
		<Medieval />,
		<Baghdad />,
		"",
		"",
		<War />,
		<Letter />,
		"",
		"",
	];
	const puzzleImges = ["", prehistoricImage, lascauxImage, "", "", RomeImage, "", "", "", "", BaghdadImage, "", "", war2Image, warImage, "", ""];

	return (
		<div className="bg-cover bg-center w-screen min-h-screen flex flex-col" style={{ backgroundImage: `url(${puzzleImges[puzzle]})` }}>
			<div className="w-full flex-1">{puzzles[puzzle]}</div>
			{puzzle !== 0 && <Slider puzzle={puzzle} setPuzzle={setPuzzle} />}
		</div>
	);
}
