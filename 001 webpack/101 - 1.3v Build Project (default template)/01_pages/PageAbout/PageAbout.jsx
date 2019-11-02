import React from 'react';
import { NavLink } from 'react-router-dom';
import {HocClose} from '../../03_hoc/HocClose/HocClose';
import ward from '../../05_images/images/ward.gif';
import myFile from '../../06_files/myFile.pdf';
import './PageAbout.scss';
import BlockAboutContent from '../../02_components/BlockAboutContent/BlockAboutContent';

class PageAbout extends React.PureComponent {
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
			
			<div className="PageAbout">
				<div className="container">
					<div className="row">
						<div className="image col-12"><div><img src={ward}/></div></div>
						<div className="title col-12"><div>About</div></div>
						<div className="col-12"><hr/></div>
						<a href={myFile} download>скачать pdf</a>
						<NavLink className="btnLevel1" to="/some" activeClassName="SActivated">some</NavLink>
					</div>
				</div>
				<BlockAboutContent/>
			</div>
		);
  	}
}


export default HocClose(PageAbout);;
