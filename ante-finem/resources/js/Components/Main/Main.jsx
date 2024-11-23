//Technologies

import React from "react";
import { useState, useEffect, useRef } from "react";
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
import LazyLoading from "../Main/LazyLoading"

// ---
// Images imports

import prehistoricImage from "../../../../assets/prehistory/prehistory_background.jpg";
import RomeImage from "../../../../assets/antiquity/egypt_background.jpg";
import BaghdadImage from "../../../../assets/medieval/baghdad_backgroundjpg.jpg";
import warImage from "../../../../assets/20th_century/war_background.jpg";
import war2Image from "../../../../assets/20th_century/war_background2.jpg";
import lascauxImage from "../../../../assets/prehistory/lascaux_background.jpg";
import medievalImage from "../../../../assets/medieval/medieval_background.jpg";

// ---

export default function Main() {
	const [puzzle, setPuzzle] = useState(0);
	const [activePuzzle, setActivePuzzle] = useState(0);
	const puzzles = [
		<Home setPuzzle={setPuzzle}  />,
		<Prehistoric setPuzzle={setPuzzle} />,
		<Lascaux setPuzzle={setPuzzle} />,
		"",
		"",
		<Antique setPuzzle={setPuzzle} />,
		<Antique_solomon setPuzzle={setPuzzle} />,
		"",
		"",
		<Medieval setPuzzle={setPuzzle} />,
		<Baghdad setPuzzle={setPuzzle} />,
		"",
		"",
		<War setPuzzle={setPuzzle} />,
		<Letter setPuzzle={setPuzzle} />,
		"",
		"",
	];

	const [showLazyLoading, setShowLazyLoading] = useState(false);
	const isInitialRender = useRef(true);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (isInitialRender.current) {
			isInitialRender.current = false;
			return;
		}
		setShowLazyLoading(true);
	}, [puzzle])

	useEffect(() => {
		console.log("[MAIN] new activePuzzle received: " + activePuzzle);
	}, [activePuzzle]);

	const puzzleImges = ["", prehistoricImage, lascauxImage, "", "", RomeImage, "", "", "", medievalImage, BaghdadImage, "", "", war2Image, warImage, "", ""];

	return (
		<div className="bg-cover bg-center w-screen min-h-screen flex flex-col" style={{ backgroundImage: `url(${puzzleImges[puzzle]})` }}>
			<LazyLoading showLazyLoading={showLazyLoading} setShowLazyLoading={setShowLazyLoading} puzzle={puzzle} setActivePuzzle={setActivePuzzle} isLoaded={isLoaded} setIsLoaded={setIsLoaded} activePuzzle={activePuzzle}/>
			<React.Suspense fallback={<></>}>
				<div className="w-full flex-1">{React.cloneElement(puzzles[activePuzzle], {onLoaded: () => {console.log("[MAIN] component loaded"); setIsLoaded(true)} })}</div>
			</React.Suspense>
			{puzzle !== 0 && <Slider puzzle={puzzle} setPuzzle={setPuzzle} />}
		</div>
	);
}
