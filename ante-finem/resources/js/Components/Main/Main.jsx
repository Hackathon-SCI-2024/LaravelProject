//Technologies

import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

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
const puzzles = [<Home />, <Prehistoric />, "", "","", <Antique />, "", "","", <Medieval />, "", "","", <War />, "", "","",];
const puzzleImges = ["", prehistoricImage, "", "","", RomeImage,"", "", "", BaghdadImage, "", "","", warImage, "", "","",];

    return (
        <div
            className="bg-cover bg-center w-screen min-h-screen flex flex-col"
            style={{ backgroundImage: `url(${puzzleImges[puzzle]})` }}
        >
            <div className="w-full flex-1">
                {puzzles[puzzle]}
            </div>
            {puzzle !== 0 &&
                <div className="h-[75px] w-full bg-green-500">
                    <Slider puzzle={puzzle} setPuzzle={setPuzzle} />
                </div>
            }
        </div>
    );
}
