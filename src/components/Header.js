import React from 'react';
import "./header.css"
import { useDataLayer } from './DataLayer'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';


function Header() {
	const [{ user }] = useDataLayer();
	return (
		<div className="header">
			<div className="header__left">
				<input type="text" placeholder="Search Artist Podcast Langues" />
				<SearchOutlinedIcon />
			</div>
				
			<div className="header__right">
				<h4>{user?.body?.display_name}</h4>
				< Avatar src={user?.body?.images[0]?.url} alt={user?.display_name} />
			</div>
		</div>

	)
}

export default Header
