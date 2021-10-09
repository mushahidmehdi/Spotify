import React from 'react';
import './songslist.css';

function Songslist({track}) {
	return (
		<div className="songRow">
			<img className="songRow__image" src={track.album.images[0].url} alt={track.name}/>
			< div className="songRow__list">
				<h1>{track.name}</h1>
				<p>
				{track.artists.map( artist => artist.name).join(', ')}
				{" "} - {" "}
				{track.album.name}
				</p>
			</div>
		</div>
	)
}

export default Songslist


				