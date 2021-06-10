import React from "react";
import './TrackItem.css';
import {useDataLayerValue} from "../../../contextAPI/DataLayer";
import {SET_ITEM, SET_PLAYING} from "../../../contextAPI/constant";

function TrackItem({track}){
    const [{},dispatch] = useDataLayerValue();
    function updateTrack(track) {
        dispatch({
            type:SET_ITEM,
            item:track
        });
        dispatch({
            type:SET_PLAYING,
            playing:true
        });
    }

    return(
        <div onClick={()=>{updateTrack(track)}} className="TrackItem">
            <img className="track_img" src={track?.album?.images[0].url} alt="Track" />
            <div className="track_info">
                <h1>{track.name}</h1>
                 <p>
                    {track?.artists.map((artist) => artist.name).join(", ")}
                    {track?.album.name}
                </p>
            </div>
        </div>
    );
}

export default TrackItem;
