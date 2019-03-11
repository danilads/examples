import React,{Fragment} from 'react';

import {Button, Popup} from 'semantic-ui-react';


class Pop extends React.PureComponent {
	
	state = {
		content:[1,2,3,4,5,6,7,8,9,10]
	};

  	render() {
		return (
			<div className={"Block_Filter"}>
				<Popup
					content='I will not render.'
					disabled
					trigger={<Button content='Button' />}
				/>
			</div>
		);

  	}

}



export default Pop;
