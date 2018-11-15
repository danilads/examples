import React from 'react';
import PropTypes from 'prop-types';
import './ButtonLevel2.scss';

class ButtonLevel2 extends React.PureComponent {
	//Документация
	static propTypes = {
		addClass: PropTypes.string,                	//Добавление класса
	
		title: PropTypes.string,                    //Имя кнопки
		funcCB: PropTypes.func,                     //Колбек - функция нажатия
		isPushed: PropTypes.bool,					//Включена ли кнопка
	  };

	state = {
		style: "ButtonLevel2",
	};

	click=()=>{
		//1. меняем класс на включенный(если надо)
		if(this.props.funcCB){
			this.props.funcCB();
		}
	}


  	render() {
		let {addClass, title, funcCB, isPushed} = this.props;
		return (
			<div className={(addClass ? addClass : '') + ' ButtonLevel2'}>
				<input className={isPushed ? 'selected':''} type='button' value={title} onClick={this.click}/>
			</div>
			
		);

  	}

}



export default ButtonLevel2;
