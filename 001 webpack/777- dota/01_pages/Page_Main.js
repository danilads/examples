import React from 'react';
import { NavLink } from 'react-router-dom';
import './Page_Main.scss';
import {connect} from "react-redux";
import {modalClose} from "../redux/actions";
class Page_Main extends React.PureComponent {
	
	state = {
		
	};
	componentDidMount() { 
		modalClose();
	}

  	render() {
		return (
			<div className="Page_Main">
				<div className="mainLogo">
					<div><img src="./04_images/logoAnim.gif"/></div>
				</div>
				<div className="buttonsBlock">
					<div><a className="btnLevel1" href="https://www.dota2.com" target="_blank">official site</a></div>
					<div><NavLink className="btnLevel1" to="/content" activeClassName="SActivated">enter portal</NavLink></div>
					<div><NavLink className="btnLevel1" to="/about" activeClassName="SActivated">about</NavLink></div>
				</div>
			</div>
		);

  	}

}



export default connect((state) => ({}),
{modalClose})(Page_Main);
