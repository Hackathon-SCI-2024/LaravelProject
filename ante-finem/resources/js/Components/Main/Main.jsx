//Technologies

import React from "react";

// ---
//Components imports

import Prehistoric from "../Prehistoric/Prehistoric";
import Antique from "../Antique/Antique";
import Medieval from "../Medieval/Medieval";
import War from "../War/War";
import Home from "./Home";
import Slider from "./Slider";

// ---
// Images imports

import prehistoricImage from "../../../../assets/prehistory/prehistory_background.jpg";
import RomeImage from "../../../../assets/antiquity/rome_background.jpg";
import BaghdadImage from "../../../../assets/medieval/baghdad_backgroundjpg.jpg";
import warImage from "../../../../assets/20th_century/war_background.jpg";

// ---

export default function Main() {
const [puzzle, setPuzzle] = React.useState(0);
const puzzles = [<Home />, <Prehistoric />, <Antique />, <Medieval />, <War />];
const puzzleImges = ["", prehistoricImage, RomeImage, BaghdadImage, warImage];

    return (
        <div
            className="bg-cover bg-center min-h-screen"
            style={{ backgroundImage: `url(${puzzleImges[puzzle]})` }}
        >
            {puzzles[puzzle]}
            <Slider puzzle={puzzle} setPuzzle={setPuzzle} />
        </div>
    );
}
