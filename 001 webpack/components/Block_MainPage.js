import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';

class Block_MainPage extends React.PureComponent {
	
	state = {
		
	};

  	render() {
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
