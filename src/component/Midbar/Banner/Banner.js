import React from "react";
import './Banner.css';
import {useDataLayerValue} from "../../../contextAPI/DataLayer";

function Banner(){
    const [{discover_weekly}] = useDataLayerValue();
    console.log("Discover Weekly: ",discover_weekly);
    let weeklyimage;
    if(discover_weekly.images){
        weeklyimage = <img className="weeklyimage" src={discover_weekly.images[0].url} alt="Weekly" />
    }else{
        weeklyimage ="";
    }
    return(
        <div className="Banner">
            {weeklyimage}
            <div className="Banner_Text">
                <strong>PLAYLIST</strong>
                <h2>{discover_weekly.name}</h2>
                <p>{discover_weekly?.description}</p>
            </div>
        </div>
    )
}
export default Banner;
