import React, { useEffect, useState } from "react";
import axios from 'axios';
import API from "./API";
const Content = ({playerData}) => {

    return (
        <div className = "w-full">
            <div className = "flex mx-56 my-10">   
                <div className="w-2/3">
                {JSON.stringify(playerData) != "{}"  ? (<img  className = "h-28 w-28 rounded-xl" src = {API.getProfileIcon(playerData.profileIconId)}/>) : ""}
                </div>

                <div className="w-1/3">
                    fdasfasd
                </div>
            </div>
        </div>
    );
}

export default Content;