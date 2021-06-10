import React from "react";
import './LeftItems.css';
import {SET_DISCOVER_WEEKLY} from "../../../contextAPI/constant";
import {useDataLayerValue} from "../../../contextAPI/DataLayer";


function LeftItems({title, Icon, id, spotify}){
    const [{},dispatch] = useDataLayerValue();
    const update_playlist = (id) => {
        spotify.getPlaylist(id).then((discover_weekly)=>{
            dispatch({
                type:SET_DISCOVER_WEEKLY,
                discover_weekly:discover_weekly
            })
        })
    }
    return(
        <div onClick={()=>{update_playlist(id)}} className="LeftItems">
            {Icon && <Icon />}
            {Icon ? <h4>{title}</h4> :  <p>{title}</p>}
        </div>
    );
}
export default LeftItems
