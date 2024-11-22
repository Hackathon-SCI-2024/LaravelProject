import React from 'react'

// ---
// image imports
import prehistoricImage from "../../../../assets/prehistory/prehistory_background.jpg";
import RomeImage from "../../../../assets/antiquity/rome_background.jpg";
import BaghdadImage from "../../../../assets/medieval/baghdad_backgroundjpg.jpg";
import warImage from "../../../../assets/20th_century/war_background.jpg";
// ---

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-start items-center bg-cover bg-center relative" style={{ backgroundImage: `url(${warImage})`, fontFamily: 'Poppins' }}> {/* background image */}
      <div className="w-[100%] h-full">
        <div className="w-[50%] h-full bg-slate-800 flex justify-center items-center" style={{ boxShadow: '60px 0px 50px 60px rgb(30,41,59)' }}> {/*  */}
          <div className="flex flex-col gap-10 text-slate-50">
            <div className="h-2 w-full relative">
              <span className="block bg-white w-full h-[1px]"></span>
              <div id="homeTimestamp1" className="absolute w-full h-[30px] [transform:translateY(-50%)] border-solid border-2 border-transparent border-r-slate-50"></div>
              <div id="homeTimestamp2" className="absolute w-full h-[30px] [transform:translateY(-50%)] border-solid border-2 border-transparent border-r-slate-50"></div>
            </div>
            <h2 className="text-5xl">Dive into history, now.</h2>
            <div id="homeEnableGameText" className="flex items-center gap-2 border-solid border-[1px] border-transparent hover:border-b-slate-50 w-fit">
              <p className="cursor-pointer">Move back in time.</p>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
