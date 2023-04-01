import React, { useEffect, useState } from "react";

const Header = () => {
    const letter = "WELCOMEBOZO";
    const [text, setText] = useState(letter);
    
    const mouseOver = () => {
        let interval = null;
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            setText(
                Array.from({ length: letter.length }, (val, index) => {
                    if (index < iteration) {
                        return letter[index];
                    } else if (letter[index]=== " "){
                        return " ";
                    } 
                    else {
                        return letter[Math.floor(Math.random() * letter.length)];
                    }
                }).join("")
            );
            if(iteration > letter.length){
                clearInterval(interval);
            }
            iteration += 1/3;
        }, 30);
    };
    
    return (
        <div  className="flex flex-col items-center justify-start h-auto">
          <h1 onMouseOver={mouseOver} className="text-5xl p-2 rounded font-mono font-bold hover:bg-black hover:text-white transition ease-in-out duration-300">{text}</h1>  
          <div className="pt-8">
          </div>
        </div>
        
    );
}

export default Header;