import React from 'react';
import {connect} from "react-redux";
import {load,save} from "../redux/actions";


class Block_MainPage extends React.PureComponent {
	
	state = {
		text:''
	};
	load=()=>{
		this.props.load();
	}
	save=()=>{
		this.props.save(this.state.text);
	}
  	render() {
		console.log(this.state.text);
		return (
			<div>
				<div>
					<input type="button" value="getItems" onClick={this.load}/>
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
{load,save})(Block_MainPage);