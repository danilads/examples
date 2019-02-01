import React from 'react';
import PropTypes from 'prop-types';
import './ButtonLevel3.scss';

class ButtonLevel3 extends React.PureComponent {
	//Документация
	static propTypes = {
		addClass: PropTypes.string,                	//Добавление класса
	
		title: PropTypes.string,                    //Имя кнопки
		funcCB: PropTypes.func,                     //Колбек - функция нажатия
		isPushed: PropTypes.bool,					//Включена ли кнопка
	  };


	click=()=>{
		//1. меняем класс на включенный(если надо)
		if(this.props.funcCB){
			this.props.funcCB();
		}
	}

	classN=(p,d)=>{
		if(d){
			if(p){
				return 'dis-pushed buttonSimple'
			}
			else{
				return 'disabled buttonSimple';
			}
		}
		if(p){
			return 'selected buttonSimple';
		}else{
			return 'diselected buttonSimple'
		}

		
	}
  	render() {
		let {addClass, title, funcCB, isPushed, dis} = this.props;
		return (
			<div className={(addClass ? addClass : '') + ' ButtonLevel3'}>
				<div className={this.classN(isPushed,dis)}  onClick={this.click}>{title}</div>
			</div>
			
		);

  	}

}



export default ButtonLevel3;
