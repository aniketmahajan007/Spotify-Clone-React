import React from "react";
import './ListSong.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useDataLayerValue} from "../../../contextAPI/DataLayer";
import TrackItem from "../TrackItem/TrackItem";
import uuid from "react-uuid";
import {SET_ITEM, SET_PLAYING} from "../../../contextAPI/constant";

function ListSong(){
    const [{discover_weekly},dispatch] = useDataLayerValue();
    function updateTrack(track) {
        console.log();
        dispatch({
            type:SET_ITEM,
            item:track[0].track
        });
        dispatch({
            type:SET_PLAYING,
            playing:true
        });
    }
    return(
      <div className="ListSong">
          <div className="body__icons">
              <PlayCircleFilledIcon onClick={()=>{updateTrack(discover_weekly?.tracks?.items)}}  className="body__shuffle"
              />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
          </div>
          {discover_weekly?.tracks?.items.map(item => {
              return <TrackItem key={uuid()} track={item.track} />
          })}
          <br/><br/><br/><br/><br/>
      </div>
    );
}
export default ListSong;
