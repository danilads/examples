import React from 'react';

import './BlockAboutContent.scss';


class BlockAboutContent extends React.PureComponent {
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
			
			<div className="BlockAboutContent">
				<div className="container">
					<div className="row">
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
export default BlockAboutContent;
