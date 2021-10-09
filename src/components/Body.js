import React from 'react';
import './body.css';
import Header from './Header';
import Songslist from './Songslist'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { useDataLayer } from './DataLayer'
import { v4 as uuidv4 } from 'uuid'

function Body(spotify) {
	const [{weekly_dicoveries}, dispatch] = useDataLayer();
	console.log(weekly_dicoveries)
	return (
		<div className="body">
			<Header />
			<div className="body__info">
				<img src={weekly_dicoveries?.body.images[0].url} alt={weekly_dicoveries?.body.name}/>
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>{weekly_dicoveries?.body.name}</h2>
					<p>{weekly_dicoveries?.body.description}</p>
				</div>
			</div>

			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledWhiteIcon className="body__playbutton"/>
					<FavoriteBorderOutlinedIcon fontSize="large"/>
					<MoreHorizTwoToneIcon />
				</div>
				{weekly_dicoveries?.body?.tracks.items.map( item => 
					<Songslist track={item.track}/>
				)}
			</div>
		</div>
	)
}

export default Body
