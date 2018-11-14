import React from 'react';
import { NavLink } from 'react-router-dom';
import Block_Frame from '../02_components/Block_Frame';
import SvgArrow from '../05_svg/SvgArrow';

class Page_Main extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		return (
			<div>
				<div>~~Main~~</div>
				<NavLink to="/filter" activeClassName="SActivated">Filter</NavLink>
				<NavLink to="/selected" activeClassName="SActivated">Selected</NavLink>
				<div>
					<Block_Frame/>
					<img src="../04_images/Abaddon.png"/>
					<a href="../06_files/myFile.pdf" download>pdf</a>
					<SvgArrow/>
				</div>
			</div>
		);

  	}

}



export default Page_Main;
