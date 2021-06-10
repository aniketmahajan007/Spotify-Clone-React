
export const AUTHPOINT = "https://accounts.spotify.com/authorize";

const RedirectURI = "https://spotify-da8c6.web.app/";

const CLIENTID = "0531886d166d4e64a7d83d94734d42d0";

const SCOPE = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const AuthLoginURL = `${AUTHPOINT}?client_id=${CLIENTID}&redirect_uri=${RedirectURI}&scope=${SCOPE.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromSpotify = () => {
    return window.location.hash.substring(1).split("&").reduce((initial,part)=>{
        let temp = part.split("=");
        initial[temp[0]] = decodeURIComponent(temp[1]);
        return initial;
    },{})
};
