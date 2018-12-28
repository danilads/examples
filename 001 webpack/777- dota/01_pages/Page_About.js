import React from 'react';
import {connect} from "react-redux";
import {modalClose} from "../redux/actions";

import './Page_About.scss';


class Page_About extends React.PureComponent {
	state = {
		text:[
			'Вся анимация написана без использования внешних библиотек',
			'Используется кросс-доменный запрос и данные храняться в redux',
			'Реализован адаптив',
			'Кроссбраузерность проверена на win / mac / andriod / ios'

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
							<ul>
								{this.state.text.map((it,key)=>{
									return <li key={key}>{it}</li>
								})}
							</ul>
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
