import React from 'react';
import './sidebaroptions.css';

const SideBarOptions = ({ options, Icon }) => {
	return (
		<div className='sidebaroptions'>
			{Icon && <Icon className="sidebaroption__icon"/>}
			{(Icon) ? <h4>{options}</h4> : <p>{options}</p> }
		</div>

	)
}

export default SideBarOptions
