import React from "react";
import './Leftbar.css';
import Logo from '../../assest/Spotify_Logo.png'
import LeftItems from "./LeftItems/LeftItems";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import {useDataLayerValue} from "../../contextAPI/DataLayer";
import uuid from "react-uuid";
import LeftItemsUp from "./LeftItems/LeftItemsUp";


export default function Leftbar({spotify}){
    const [{playlists}] = useDataLayerValue();
    return(
        <div className="Leftbar">
            <img src={Logo} className='logo' alt="Spotify Logo" />
            <LeftItems spotify={spotify} id="33VaXzwcymyjl4DclPn5hJ" Icon={HomeOutlinedIcon} title="Home" />
            <LeftItemsUp Icon={SearchOutlinedIcon} title="Search" />
            <LeftItemsUp Icon={LibraryMusicOutlinedIcon} title="Your Library" />
            <br/>
            <strong className="playlist">PLAYLIST</strong>
            <hr />
            <div className="playlist_box">
                {playlists?.items?.map(list => {
                    return <LeftItems spotify={spotify} id={list.id} key={uuid()} title={list.name} />
                })}
            </div>
        </div>
    )
}
