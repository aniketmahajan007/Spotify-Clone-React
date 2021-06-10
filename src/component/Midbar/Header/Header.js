import React from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from "@material-ui/core";
import {useDataLayerValue} from "../../../contextAPI/DataLayer";

function Header(){
    const [{user}] = useDataLayerValue();
    return(
        <div className="Header">
            <div className="Header_left">
                <SearchIcon/>
                <input type="text" placeholder="Search for songs, artist" />
            </div>
            <div className="Header_right">
                <Avatar alt="User Photo" src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
