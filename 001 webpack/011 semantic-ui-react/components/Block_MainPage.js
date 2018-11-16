import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import { Visibility } from 'semantic-ui-react';

class Block_MainPage extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		return (
			<div className={"Block_Filter"}>
				<Visibility>
					<Fragment>
						<Filter>hello</Filter>
					</Fragment>
				</Visibility>
			</div>
		);

  	}

}



export default Block_MainPage;
