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
				<div>~~Main~~</div>
				<div>league(external link)</div>
				<div>enter portal</div>
				<div>about</div>
				<br/>
				<div><NavLink to="/content" activeClassName="SActivated">Dota content</NavLink></div>
				<br/>
				<div><NavLink to="/about" activeClassName="SActivated">About</NavLink></div>
			</div>
		);

  	}

}



export default connect((state) => ({}),
{modalClose})(Page_Main);
