import React from 'react';
import {connect} from "react-redux";
import {modalClose} from "../redux/actions";

import './Page_About.scss';


class Page_About extends React.PureComponent {
	state = {
		text:[
			{
				title:'Динамичность',
				arr:['фильтр','модальное окно']
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
						<div className="col-12">
							{this.state.text.map((it,key)=>{

								let result=[];
								result.push(<div key={key}>{it.title}</div>)
								console.log('--',it.arr);
								result.push(<ul>{it.arr.map((i,k)=>{
									return <li>{i}</li>
								})}</ul>)
							
								return result;
							})}
							
							'Вся анимация написана без использования внешних библиотек',
							'Используется кросс-доменный запрос и данные храняться в redux',
							'Реализован адаптив',
							'Кроссбраузерность проверена на win / mac / andriod / ios'

							Динамичность
								-фильтр
								-модальное окно
							Производительность
								-в  фильтре нету перерендеров
								-анимация работает без перерендеров
							Навигация
								-подключен router (но на  github pages запрещено переход по урлу ссылка)
								на простой сборке работает нормально
							Кроссбраузерность

							Коммуникация
							 redux / pапрос кродоменный
							 Сборка 
								-dev
								-prod
								web packminify
							Трудности
								плавный движок анимации
						</div>
					</div>
				</div>
			</div>
		);
  	}
}
export default connect((state) => ({}),
{modalClose})(Page_About);
