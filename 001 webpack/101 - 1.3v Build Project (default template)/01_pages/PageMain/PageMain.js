import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageMain.scss';
import {HocClose} from '../../03_hoc/HocClose/HocClose';
import Spiner from '../../04_primitives/Spiner/Spiner';
import logoAnim from '../../05_images/images/logoAnim.gif';
import {connect} from "react-redux";
import {acHeroesLoading} from "../../redux/actions/acHeroes";
import {NetworkApi} from "../../network/NetworkApi.js";

class PageMain extends React.PureComponent {
	request  = async () => {
		let response = await NetworkApi.exampleReturnRequest();
		console.log('---response',response);
	};
	componentDidMount(){
		this.request();
		
	}
	_renderSpiner=()=>{
		let d = this.props.heroes;
		let result;

		if(!d.isLoaded&&!d.loading){
			result='данные еще не загужались'
		}
		if(d.loading){
			result = <Spiner/>
		}
		if(d.isLoaded){
			result='данные загружены'
		}
		return result;
	};
  	render() {
		  console.log(this.props.heroes);
		return (
			<div className="PageMain">
				<div className="mainLogo">
					<div><img src={logoAnim}/></div>
				</div>
				<div className="buttonsBlock">
					<div><a className="btnLevel1" href="https://www.dota2.com" target="_blank">official site</a></div>
					<div className="btnLevel1" onClick={this.props.AC_loadHeroes}>load redux</div>
					<div><NavLink className="btnLevel1" to="/about" activeClassName="SActivated">about</NavLink></div>
				</div>
				<div className="cont">{this._renderSpiner()}</div>
			</div>
		);

  	}

}


//hoc обернутый в конекст
export default connect((state) => ({
	heroes:state.rdHeroes,
}),
{acHeroesLoading})(HocClose(PageMain));