import React, { useEffect, useState } from "react";
import axios from 'axios';
import API from "./API";
const Content = ({playerData}) => {

    return (
        <div className = "w-full">
            <div className = " mx-56 my-10">   
                <div className="">
                {JSON.stringify(playerData) != "{}"  ? (<img  className = "h-28 w-28 rounded-xl" src = {API.getProfileIcon(playerData.profileIconId)}/>) : ""}
                </div>

                <div className="">
                    fdasfasd
                </div>
            </div>
        </div>
    );
}

export default Content;