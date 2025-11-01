import React from 'react';

function SongContainer(props) {

    return(
        <div id="playlists">
            <li>
                <h3>{props.song["name"]}</h3>
                <p>{props.song["artist"]}</p>
                <button onClick={() => props.removeSong(props.song.url)}>x</button>
            </li>
        </div>
    )
}

export default SongContainer