import React, { useEffect } from 'react';
import Login from './components/Login';
import { getTokenFromURL } from './spotity';
import SpotifyWebApi from 'spotify-web-api-node'
import { useDataLayer } from './components/DataLayer'
import Player from './components/Player'
import './app.css'

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayer();
  useEffect( () => {
    var hash = getTokenFromURL();
    window.location.hash = ""
    const _token = hash.access_token;
    if (_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then( user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
      spotify.getUserPlaylists().then( (playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      });
      spotify.getPlaylist('37i9dQZEVXcPyTeIjGiaE8').then( response => {
        dispatch({
          type: 'GET_WEEKLY_DISCOVERIES',
          weekly_dicoveries: response
        })
      })
    }
  },[dispatch])
  return (
    <div className="app">
    {(token) ? <Player spotify={spotify}/> : <Login/>}
    </div>
  );
}

export default App;
