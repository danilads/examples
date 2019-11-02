import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import {backendServiceHost} from 'config';
import axios from "axios";

class Block_MainPage extends React.PureComponent {
	
	state = {
		
	};
	//делает запрос на  '/api/': 'http://172.30.71.195:9080/SBOL-Business/', см. Webpack config
	request  = async () => {
		let answer;
		answer = await axios({
			url: `${backendServiceHost}api/currency/list`,
			method: 'post'
		  }).then(response => {
			  return response;
		  });
	};
	componentDidMount(){
		this.request();
	}
  	render() {
		  console.log('backendServiceHost',backendServiceHost);
		return (
			<div className={"Block_Filter"}>
				<Fragment>
					<Filter>hello</Filter>
				</Fragment>
			</div>
		);

  	}

}



export default Block_MainPage;
