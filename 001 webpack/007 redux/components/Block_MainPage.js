import React from 'react';
import {connect} from "react-redux";
import {load,save,some3} from "../redux/actions";

//01
//import store
import store from '../redux/store'

//--можно экспортировать store в функцию
const somefun = () => {
	console.log('---store', store.getState());
};

//--вызов редюсера
const writeSome = () => {	
	store.dispatch({
				type: 'ITEMS_WRITE_FROM_FUNC_TO_ITEMS',
				payload:'hello'
			}
	);
		
};


//02
const somefunc2 = () => (dispatch, getState) => {
	console.log('---somefunc2')
	console.log(getState())
	
}

class Block_MainPage extends React.PureComponent {
	
	state = {
		text:''
	};
	load=()=>{
		this.props.load();
	}
	save=()=>{
		console.log('---WTF',this.props.save);
		this.props.save(this.state.text);
	}
  	render() {
		somefun();
		this.props.somefunc2();
		this.props.somefunc3();

		
		return (
			<div>
				<div>
					<input type="button" value="getItems" onClick={this.load}/>
					<input type="button" value="вызов редюсера из функции" onClick={writeSome}/>
				</div>
				<div>
					<input type="text" onChange={(e)=>this.setState({text:e.target.value})} value={this.state.text} />
					<input type="button" value="saveInRedux" onClick={this.save}/>
				</div>
			</div>
		);

  	}

}


export default connect((state) => ({
	reducer: state.reducer
}),
(dispatch)=>{
	return{
		load: () => dispatch(load()),
		save: (e) => dispatch(save(e)),
		somefunc2: somefunc2,
		somefunc3: () => {
			console.log('---func 3');
			dispatch(some3());
		}
	}
})(Block_MainPage);