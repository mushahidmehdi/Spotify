import React from 'react';
import './sidebar.css';
import { useDataLayer } from './DataLayer';
import { v4 as uuidv4 } from 'uuid'

import SideBarOptions from './SideBarOptions';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';


function Sidebar() {
	const [{ playlists }] = useDataLayer();
	return (
		<div className="sidebar">
			<img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>	
			<SideBarOptions Icon={HomeOutlinedIcon} options='Home'/>
			<SideBarOptions Icon={SearchOutlinedIcon} options='Search'/>
			<SideBarOptions Icon={LibraryMusicOutlinedIcon} options='Your Library'/>
			<br/>
			<strong className="sidebar__title">PLAYLISTS</strong>
			<hr/>
			{playlists?.body?.items?.map( (playlist) => (
				<SideBarOptions key={uuidv4()} options={playlist.name}/>	
			))}
		</div>
		
	)
}

export default Sidebar
