import {SET_DISCOVER_WEEKLY, SET_ITEM, SET_PLAYING, SET_PLAYLIST, SET_TOKEN, SET_USER} from "./constant";


export const initialState = {
    user:null,
    playlists: [],
    playing: false,
    item:null,
    token:null,
    discover_weekly:{}
}

const reducer = (state, action) => {
    switch (action.type){
        case SET_USER:
            return {
                ...state,
                user:action.user
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case SET_PLAYLIST:
            return {
                ...state,
                playlists: action.playlists
            }
        case SET_DISCOVER_WEEKLY:
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }
        case SET_ITEM:
            return {
                ...state,
                item:action.item
            }
        case SET_PLAYING:
            return {
                ...state,
                playing:action.playing
            }
        default:
            return state
    }
};
export default reducer;
