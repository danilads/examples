import React from 'react';
import { NavLink } from 'react-router-dom';
import './Page_Main.scss';
import {HOC_close} from '../hoc/HOC_close';
import {connect} from "react-redux";
import {AC_loadHeroes} from "../redux/actions";
class Page_Main extends React.PureComponent {
	
	state = {
		
	};
	_renderSpiner=()=>{
		let result;
		return result
	};
  	render() {
		  console.log(this.props.heroes);
		return (
			<div className="Page_Main">
				<div className="mainLogo">
					<div><img src="./04_images/logoAnim.gif"/></div>
				</div>
				<div className="buttonsBlock">
					<div><a className="btnLevel1" href="https://www.dota2.com" target="_blank">official site</a></div>
					<div className="btnLevel1" onClick={this.props.AC_loadHeroes}>load redux</div>
					<div><NavLink className="btnLevel1" to="/about" activeClassName="SActivated">about</NavLink></div>
				</div>
				<div>{this._renderSpiner}</div>
			</div>
		);

  	}

}


//hoc обернутый в конекст
export default connect((state) => ({
	heroes:state.rdHeroes,
}),
{AC_loadHeroes})(HOC_close(Page_Main));