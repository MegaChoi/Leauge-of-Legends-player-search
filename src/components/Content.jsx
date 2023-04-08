import React, { useEffect, useState } from "react";
import axios from 'axios';
import api from "./API";
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
  ArcElement, 
  Tooltip,
  Legend
);


function Content ({playerData}) {
    const [matches, setMatches] = useState(null);
    const [mounted, setMounted] = useState(false);
    const [gameData, setGameData ] = useState(
      {
        labels: ['Win', 'Loss'],
        datasets: [
          {
            data: [0,0],
            backgroundColor: [
              'rgb(54, 162, 235)',
              'rgb(255, 99, 132)',
            ],
            hoverOffset: 4,
          },
        ],
      }
    );

    useEffect(() => {
      async function getMatches() {
        try {
          const data = await api.getMatches(playerData.puuid);
          setMatches(data);
          
        } catch (error) {
          console.error(error);
        }
      }

      if(mounted){
        getMatches();
      }else{
        setMounted(true);
      }
      
    }, [playerData]);

    useEffect(() => {
      if (matches) {
        getWinPercentage();
      }
    }, [matches]);



    function getWinPercentage(){
      var gameWin = 0;
      try{
        if (matches) {
          matches.forEach((match) => {
            const playerIndex = match.metadata.participants.indexOf(playerData.puuid);
    
            if(playerIndex > 4){
              if (match.info.teams[1].win){
                gameWin += 1;
              }
            }else{
              if (match.info.teams[0].win){
                gameWin += 1;
              }
            }
          });
          console.log(gameWin);
    
          setGameData({
            ...gameData,
            datasets: [
              {
                ...gameData.datasets[0],
                data: [gameWin, 12 - gameWin]
              }
            ]
          });
        }
      }catch (error){
    
      }
    }

    function getProfileIcon() {
      if (playerData.name !== "NOTFOUND") {
        return <img className="h-28 w-28 rounded-xl" src={api.getProfileIcon(playerData.profileIconId)} />;
      } else {
        return null;
      }
    }

    const options = {
      responsive: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Donut Chart',
        },
      },
    };

    return (
        // 
        <section className="pt-6">
            <div className="container flex flex-col py-6 mx-auto md:w-1/2 md:flex-row items-center bg-black rounded-md" >
              <div className="flex flex-col">
                <div className="mx-auto pt-6">
                  {getProfileIcon()}
                </div>
                
                
                <div className="pt-6">
                  <Doughnut data={gameData} options={options} />
                </div>
              </div>
            </div>
        </section>
    );
}

export default Content;