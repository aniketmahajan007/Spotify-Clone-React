import React, {Component} from 'react';
import HomeLogo from "../../assest/Spotify_Logo.png";
import "../Login/Login.css"
import {AuthLoginURL} from "../../spotify";

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <img src={HomeLogo} alt="Spotify login"/>
                <a href={AuthLoginURL}>LOGIN WITH SPOTIFY</a>
            </div>
        );
    }
}

export default Login;
