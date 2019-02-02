import React from 'react';
import {connect} from "react-redux";
import {modalClose} from "../redux/actions";
import {GlassHoc} from '../hoc/GlassHoc';
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

	componentDidMount() { 
		this.props.modalClose();
	}
	
  	render() {
		let rand = Math.floor(Math.random() * (2 - 0)) + 0;
		console.log(rand );
		return (
			
			<div className="Page_About">
				<div className="container">
					<div className="row">
						<div className={rand?"image-ward col-12":"image-cur col-12"}><div><img src={rand?"./04_images/ward.gif":"./04_images/cur.gif"}/></div></div>
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
{modalClose})(GlassHoc(Page_About));