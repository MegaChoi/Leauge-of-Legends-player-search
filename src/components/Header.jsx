import React, { useEffect, useState } from "react";

const Header = ({playerName = 'WELCOME'}) => {
    const letter = playerName;
    const [text, setText] = useState(playerName);
    const [showBg, setShowBg] = useState(false);
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
            setShowBg(false);  
        }
        iteration += 1/3;
    }, 30);
    
};


  return (
    <div className="flex flex-col items-center justify-start">
      <h1
        className={`text-5xl p-2 rounded font-mono font-bold ${showBg ? 'bg-black text-white transition ease-out duration-100' : 'hover:bg-black hover:text-white transition ease-in-out duration-300'}`}
      >
        {text}
      </h1>
    </div>
  );
}

export default Header;