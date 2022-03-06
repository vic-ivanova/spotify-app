import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { ArtistList } from "./components/ArtistList";
import { FaSpotify } from "react-icons/fa";

function App() {
  const [clientToken, setClientToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  const getToken = () => {
    let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
    let token = urlParams.get("access_token");

    setClientToken(token);
  }

  useEffect(() => {
    getToken();
  }, []);

  const logout = () => {
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
        type: "artist"
      }
    })

    setArtists(data.artists.items);
  };

  // const getArtistAlbums = async (e, id) => {
  //   e.preventDefault();
  //   const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
  //     headers: {
  //       Authorization: `Bearer ${clientToken}`
  //     }
  //   })

  //   setAlbums(data);
  // }

  console.log(artists)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="d-flex align-items-center my-5">
          <FaSpotify style={{color: "#1DB954", marginRight: "10px"}} /> Spotify React App
        </h1>
        {clientToken ?
          <Home 
            onClick={logout} 
            onSubmit={searchArtists} 
            onChange={e => setSearchKey(e.target.value)} 
          /> 
          :
          <Login />
        }
        {clientToken && (
          <ArtistList artists={artists} />
        )}
      </header>
    </div>
  );
}

export default App;