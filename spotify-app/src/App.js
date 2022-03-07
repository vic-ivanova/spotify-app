import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Dashboard from "./pages/Dashboard";
import Albums from "./pages/Albums";
import Tracks from "./pages/Tracks";
import { FaSpotify } from "react-icons/fa";
import { useGetToken } from "./api/auth";
// import {
//   Route,
//   Routes,
//   Navigate
// } from 'react-router-dom';

function App() {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [albumTracks, setAlbumTracks] = useState([]);
  const [clientToken, setClientToken] = useGetToken();

  const handleLogout = () => {
    setClientToken("");
  }

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${clientToken}`
      },
      params: {
        q: searchKey,
        type: "artist",
      }
    })

    setArtists(data.artists.items);
  };

  const getArtistAlbums = async (id) => {
    const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
      headers: {
        Authorization: `Bearer ${clientToken}`
      }
    })

    setAlbums(data.items);
  }

  const getAlbumTracks = async (id) => {
    const { data } = await axios.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
      headers: {
        Authorization: `Bearer ${clientToken}`
      }
    })
    
    setAlbumTracks(data.items);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="d-flex align-items-center my-5">
          <FaSpotify style={{color: "#1DB954", marginRight: "10px"}} /> Spotify React App
        </h1>
          <Dashboard
            artists={artists} 
            searchKey={searchKey}
            clientToken={clientToken}
            onClick={handleLogout} 
            onSubmit={searchArtists} 
            getArtistId={getArtistAlbums}
            onChange={e => setSearchKey(e.target.value)}
          /> 
          <Albums 
            clientToken={clientToken} 
            albums={albums} 
            searchKey={searchKey} 
            getAlbumId={getAlbumTracks} 
          /> 
          <Tracks 
            tracks={albumTracks}
            searchKey={searchKey}
            clientToken={clientToken}
          />
      </div>
    </div>
  );
}

export default App;