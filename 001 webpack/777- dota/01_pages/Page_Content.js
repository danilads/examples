import React from 'react';


import './Page_Content.scss';


import Block_Filter from '../02_components/Block_Filter';
import {ModalHoc} from '../hoc/ModalHoc';
import {connect} from "react-redux";
import {modalClose} from "../redux/actions";
class Page_Content extends React.PureComponent {
	state = {
		
	}


	componentDidMount() { 
		modalClose();
	}
  	render() {
		let {reducer, loadNews, loadHeroes, loadItems} = this.props;
		let {curBtn2,curBtn3} = this.state;
		const Modal = ModalHoc(Block_Filter)
		return (
			
			<div className="Page_Content container">
				<div className="row">
					<div className="col-12 img"><img src="./04_images/Logo2.png"/></div>
					<div className="col-12">
						<Modal/>
						
						{/* <Block_Filter/> */}

					</div>
				</div>	
			</div>
		);
  	}
}

export default connect((state) => ({}),
{modalClose})(Page_Content);
