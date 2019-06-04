import React from 'react';



class Block_Mounted extends React.PureComponent {

  	render() {

		return (
			<div>
				{this.props.text}
			</div>
		);

  	}

}

export default Block_Mounted;