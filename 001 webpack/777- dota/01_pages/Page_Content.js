import React from 'react';
import { NavLink } from 'react-router-dom';
import './Page_Content.scss';
import Block_Filter from '../02_components/Block_Filter';
class Page_Content extends React.PureComponent {
	
	
  	render() {

		return (
			
			<div className="Page_Content container">
				<div className="row">
					<div className="col-12 img">img</div>
					<div className="col-12"><hr/></div>
					<div className="col-12"><Block_Filter/></div>
				</div>	
			</div>
			
		);

  	}

}



export default Page_Content;
