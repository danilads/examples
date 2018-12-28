import React from 'react';
import {connect} from "react-redux";
import {modalClose} from "../redux/actions";

import './Page_About.scss';


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
				arr:['подключен react-router-dom (но на github pages запрещено переход по урлу) на локальной сборке работает нормально','навигаиця в меню фильтра']
			},
			{
				title:'Кроссбраузерность и адаптив проверено на:',
				arr:['PC (chrome, chrome-46)','mac (chrome)','iOS (chrome)','android (chrome)']
			},
			{
				title:'Коммуникация',
				arr:['для хранения данных используется redux','используется кросс-доменный запрос и данных']
			},
			{
				title:'Сборка',
				arr:['development','production (minify)']
			},
			{
				title:'Трудности',
				arr:['анимация фильтра написана без использования внешних библиотек']
			},
		]
	}

	componentDidMount() { 
		modalClose();
	}
	
  	render() {
		
		return (
			
			<div className="Page_About">
				<div className="container">
					<div className="row">
						<div className="image col-12"><div><img src="./04_images/ward.gif"/></div></div>
						<div className="title col-12"><div>About</div></div>
						<div className="col-12"><hr/></div>
						<div className="col-12 content">
							{this.state.text.map((it,key)=>{

								let result=[];
								result.push(<div key={key}>{it.title}</div>)
								result.push(<ul key={key+'ul'}>{it.arr.map((i,k)=>{
									return <li key={k}>{i}</li>
								})}</ul>)
							
								return result;
							})}
							
							
						
					
							
						</div>
					</div>
				</div>
			</div>
		);
  	}
}
export default connect((state) => ({}),
{modalClose})(Page_About);
