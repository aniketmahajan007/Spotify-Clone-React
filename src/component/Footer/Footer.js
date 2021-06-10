import React from "react";
import './Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import PauseCircleOutlineOutlinedIcon from '@material-ui/icons/PauseCircleOutlineOutlined';
import {Grid, Slider} from "@material-ui/core";
import {VolumeDown} from "@material-ui/icons";
import {useDataLayerValue} from "../../contextAPI/DataLayer";
import {SET_PLAYING} from "../../contextAPI/constant";

export default function Footer(){
    const [{item,playing},dispatch] = useDataLayerValue();
    const update_play_status = (status) =>{
        status = !status
        dispatch({
            type:SET_PLAYING,
            playing:status
        })
    }
    return(
        <div className="Footer">
            <div className="Footer_left">
                <img alt={item?.name} className="album_img" src={item?.album?.images[0].url}/>
                {item ?
                    (<div className="album_details">
                        <h4>{item?.name}</h4>
                        <p>{item?.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>):
                    (<div className="album_details">
                        <h4>No song is selected</h4>
                        <p>............</p>
                    </div>)
                }
            </div>
            <div className="Footer_center">
                <ShuffleIcon className="footer_icon footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                {playing ?
                    <PauseCircleOutlineOutlinedIcon onClick={()=>{update_play_status(1)}} className="PlayCircleFilledWhiteOutlinedIcon footer_icon"/>:
                    <PlayCircleFilledWhiteOutlinedIcon onClick={()=>{update_play_status(0)}} className="PlayCircleFilledWhiteOutlinedIcon footer_icon"/>
                }
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_icon footer_green" />
            </div>
            <div className="Footer_right">
                <Grid className="grid_container" container spacing={2}>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider defaultValue={50} min={0} max={100} color="secondary" aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}
