import React from 'react';
import {connect} from "react-redux";
import {HOC_close} from '../hoc/HOC_close';

import './Page_About.scss';
import Block_AboutContent from '../02_components/Block_AboutContent';

class Page_About extends React.PureComponent {
	state = {
		text:[
			{
				title:'Динамичность',
				arr:['реализован фильтр позиций','реализованы модальные окна']
			},
			{
				title:'Производительность',
				arr:['в  фильтре нету перерендеров','анимация работает без перерендеров']
			},
			{
				title:'Навигация',
				arr:['подключен react-router-dom (но на github pages запрещен переход по урлу) в локальной сборке работает нормально','навигаиця в меню фильтра']
			},
			{
				title:'Кроссбраузерность и адаптив, проверено на:',
				arr:['PC (chrome, chrome-46, opera, ie-11, firefox)','mac (chrome, safari, firefox )','iOS (safari, chrome)','android (chrome)']
			},
			{
				title:'Коммуникация',
				arr:['для хранения данных используется redux','используется кросс-доменный запрос данных']
			},
			{
				title:'Сборка',
				arr:['development','production (minify)']
			},
			{
				title:'Трудности',
				arr:['Сложно было реализовать анимацию фильтра (написана без использования внешних библиотек)']
			},
		]
	}


  	render() {
		
		return (
			
			<div className="Page_About">
				<div className="container">
					<div className="row">
						<div className="image col-12"><div><img src="./04_images/ward.gif"/></div></div>
						<div className="title col-12"><div>About</div></div>
						<div className="col-12"><hr/></div>
					</div>
				</div>
				<Block_AboutContent/>
			</div>
		);
  	}
}


export default HOC_close(Page_About);;
