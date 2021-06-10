import React, {useEffect} from 'react';
import Login from "./component/Login/Login";
import Player from "./component/Player/Player";
import {getTokenFromSpotify} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import './App.css';
import {useDataLayerValue} from "./contextAPI/DataLayer";
import {SET_DISCOVER_WEEKLY, SET_PLAYLIST, SET_TOKEN, SET_USER} from "./contextAPI/constant";

function App() {
    const [{token},dispatch] = useDataLayerValue();
    const Spotify = new SpotifyWebApi();

    useEffect(()=>{
        const url_items = getTokenFromSpotify();
        const _token = url_items.access_token;
        if(_token){
            console.log(_token);
            dispatch({
                type: SET_TOKEN,
                token:_token
            })
            Spotify.setAccessToken(_token);
            Spotify.getMe().then(user => {
                dispatch({
                    type: SET_USER,
                    user:user
                });
            });
            Spotify.getUserPlaylists().then((list)=>{
                dispatch({
                   type: SET_PLAYLIST,
                   playlists:list
                });
            })
            Spotify.getPlaylist("33VaXzwcymyjl4DclPn5hJ").then((discover_weekly)=>{
                dispatch({
                    type:SET_DISCOVER_WEEKLY,
                    discover_weekly:discover_weekly
                })
            })
        }
        window.location.hash="";
    },[dispatch]);
    return (
        <div className="App">
            {
                token ?
                    <Player spotify={Spotify} /> :
                    <Login/>
            }
        </div>
    );
}

export default App;
