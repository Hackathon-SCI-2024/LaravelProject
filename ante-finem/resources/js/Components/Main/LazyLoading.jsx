import React from "react";
import { useRef, useEffect } from "react";

const LazyLoading = ({ showLazyLoading, setShowLazyLoading, puzzle, setActivePuzzle, isLoaded, setIsLoaded, activePuzzle}) => {

    const containerLazyLoading = useRef(0);
    useEffect(() => {
        console.log(containerLazyLoading.current)
        console.log(showLazyLoading)
        if (containerLazyLoading.current == 0) {
            return;
        }
        if (showLazyLoading) {
            containerLazyLoading.current.style.display = "flex";
            setTimeout(() => {
                containerLazyLoading.current.style.opacity = "1";
            }, 100);
        }
        else {
            containerLazyLoading.current.style.opacity = "0";
        }
    }, [showLazyLoading])

    const changeDisplayProperty = () => {
        console.log("[LAZY LOADING] transition ended");
        if (!showLazyLoading) {
            containerLazyLoading.current.style.display = "none";
        }
        else {
            if(puzzle != activePuzzle) {
                console.log("[LAZY LOADING] setting new active puzzle: " + puzzle)
                setActivePuzzle(puzzle)
            }
        }
    }

    useEffect(() => {
        if (isLoaded) {
            console.log("[LAZY LOADING] ISLOADED: " + isLoaded)
            setShowLazyLoading(false);
            setIsLoaded(false);
            console.log("[LAZY LOADING] ISLOADED: " + isLoaded)
        }
        else {
            console.log("[LAZY LOADING] NOT LOADED: " + isLoaded)
        }
    }, [isLoaded])

    return (
        <div ref={containerLazyLoading} onTransitionEnd={() => { changeDisplayProperty() }} className="absolute z-10 w-screen h-screen justify-center items-center bg-slate-800 hidden opacity-0 transition-all gap-4">
            <div id="lazyLoadingDot1" className="w-10 h-10 bg-white rounded-full opacity-0"></div>
            <div id="lazyLoadingDot2" className="w-10 h-10 bg-white rounded-full opacity-0"></div>
            <div id="lazyLoadingDot3" className="w-10 h-10 bg-white rounded-full opacity-0"></div>
        </div>
    )
}

export default LazyLoading;