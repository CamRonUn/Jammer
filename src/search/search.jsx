import React, { useState } from 'react';
import {search} from '../../util/Spotify';


function SearchBar(props) {
    const [query, setSearch] = useState('Search Songs')
    const [song1, setSong1] = useState({
        name: "...",
        artist: "...",
        url: "..."})
    const [song2, setSong2] = useState({
        name: "...",
        artist: "...",
        url: "..."})
    const [song3, setSong3] = useState({
        name: "...",
        artist: "...",
        url: "..."})
    /* const [song4, setSong4] = useState({
        name: "...",
        artist: "...",
        url: "..."})
    const [song5, setSong5] = useState({
        name: "...",
        artist: "...",
        url: "..."}) */

    
    async function searched(term) {
            const results = await search(term)
            console.log("res test")
            console.log(results)
            setSong1(results[0])
            setSong2(results[1])
            setSong3(results[2])
            //setSong4(results[3])
            //setSong5(results[4])

        }


    const handleSearch = (e) => {
        setSearch(e.target.value) 
        e.preventDefault()

    }

    const searchenter = (e) => {
        e.preventDefault()
        searched(query)
    }

    
   
    return(
        <div id="search" className="section search" >
            <form onSubmit={searchenter}>
                <input value={query} onChange={handleSearch}/>
            </form>
            <ul>
                <li id="song1">
                    <h3>{song1["name"]}</h3>
                    <p>{song1["artist"]}</p>
                    <button onClick={() => props.addSongHandler(song1)}>Add</button>
                </li>
                <li id="song2">
                    <h3>{song2["name"]}</h3>
                    <p>{song2["artist"]}</p>
                    <button onClick={() => props.addSongHandler(song2)}>Add</button>
                </li>
                <li id="song3">
                    <h3>{song3["name"]}</h3>
                    <p>{song3["artist"]}</p>
                    <button onClick={() => props.addSongHandler(song3)}>Add</button>
                </li>


            </ul>
        </div>

    )
}

export default SearchBar