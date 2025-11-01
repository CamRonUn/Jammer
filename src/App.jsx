import React, { useState } from 'react';
import './App.css';
// import Spotify from '../util/Spotify';
import SearchBar from './search/search';
import SongContainer from './Playlist/Playlist';

function App() {

  const [songList, setSongs] = useState([])
  const [playlistTitle, setPlaylistTitle] = useState('Playlist Title')

  const addSongHandler = (song) => {
      if (song['name'] !== "..." && !songList.some(songs => songs.url === song.url)) {
      setSongs((prev) => [...prev, song])}
      console.log(songList)
  }

  const handleTitle = (e) => {
    setPlaylistTitle(e.target.value)
  }
  
  const removeSong = (songUrl) => {
    console.log('remove')
    setSongs((prev) => prev.filter(song => song.url !== songUrl))
  }

  return(
    <div className='app'>
      <h1>Jammer</h1>
      <div className="main" id="app">
        <SearchBar addSongHandler={addSongHandler} className="section"/> 

        <div id="playlist" className="section">
          <input id="playlistTitle" onChange={handleTitle} value={playlistTitle}/>
          <ul>
              {songList.map((song) => (
                <SongContainer 
                song={song} removeSong={removeSong}
              />))}
          </ul>
          <button className='createButton'>Create Playlist</button>

        </div>
      </div>






    </div>
  )
}

export default App;
