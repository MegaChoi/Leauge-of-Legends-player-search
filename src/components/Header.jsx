import React, { useEffect, useState } from "react";

const Header = ({playerName = 'WELCOME'}) => {
    const [text, setText] = useState(playerName);
    const [showBg, setShowBg] = useState(false);
    const [rnd, setRnd] = useState(0);
  useEffect(() => {
      setShowBg(true);
      scrambleText();
  }, [playerName]);




  const scrambleText = () => {
    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        setText(
            Array.from({ length: playerName.length }, (val, index) => {
                if (index < iteration) {
                    return playerName[index];
                } else if (playerName[index]=== " "){
                    return " ";
                } 
                else {
                    return playerName[Math.floor(Math.random() * playerName.length)];
                }
            }).join("")
        );
        if(iteration > playerName.length){
            clearInterval(interval);  
            setShowBg(false);  
        }
        iteration += 1/3;
    }, 30);
    
};


  return (
    <div className="flex flex-col items-center justify-start">
      <h1
        className={`text-5xl p-2 rounded font-mono font-bold ${showBg ? 'bg-black text-white transition ease-out duration-300' : 'hover:bg-black hover:text-white transition ease-in-out duration-300'}`}
        onMouseOver= {scrambleText}
      >
        {text}
      </h1>
    </div>
  );
}

export default Header;