import React from 'react';
import './footer.css';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import { useDataLayer } from './DataLayer';



function Footer() {
	const [{ playlists }] = useDataLayer();
	
	return (
		<div className="footer">
			<div className="footer__left">
				<img src="https://images.jdmagicbox.com/comp/sonbhadra/t4/9999p5445.5445.200425191823.b5t4/catalogue/raja-dj-obra-sonbhadra-disc-jockey-koy1xjh3zd.jpg?clr=" alt=""/>
				<div className="song__info">
					<h4>Currenly Playing</h4>
					<p>Ariana grande</p>
				</div>
			</div>
			<div className="footer__center">
				<ShuffleOutlinedIcon className="icon__color"/>
				<SkipPreviousIcon className="icon__title"/>
				<PlayCircleFilledWhiteOutlinedIcon fontSize="large" className="icon__title"/>
				<SkipNextIcon className="icon__title"/>
				<LoopOutlinedIcon className="icon__color"/>
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<QueueMusicOutlinedIcon/>
					</Grid>
					<Grid item>
						<VolumeDownOutlinedIcon/>
					</Grid>
					<Grid item xs>
						< Slider/>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default Footer
