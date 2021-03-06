import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer'
import Body from './Body';
import './player.css'

function Player(spotify) {
	return (
		<div className='player'>
			<div className="player__body">	
				<Sidebar/>
				<Body spotify={spotify}/>
			</div >
				<Footer/>
		</div >
	)
}

export default Player
