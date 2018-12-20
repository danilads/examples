import React from 'react';
import {connect} from "react-redux";
import {modalClose} from "../redux/actions";

import './Page_About.scss';


class Page_About extends React.PureComponent {
	state = {
		
	}

	componentDidMount() { 
		modalClose();
	}
	
  	render() {
		
		return (
			
			<div className="Page_About">
				<div>проделанная работа</div>
				<div>Вся анимация написана без использования внешних библиотек</div>
				<div>Используется кросс-доменный запрос и данные храняться в redux</div>
				<div>Реализован адаптив</div>
				<div>Кроссбраузерность проверена на win / mac / andriod / ios</div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
  	}
}
export default connect((state) => ({}),
{modalClose})(Page_About);
