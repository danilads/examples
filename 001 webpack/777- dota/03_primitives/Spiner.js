import React from 'react';

import './Position.scss';
class Spiner extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		//console.log('render ',this.props.title);
		let {data, status} = this.props;
		
		return (
            <div className={"Position"}>
                <div className={"spinner"+status.slice(1)}>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
		);

  	}

}



export default Spiner;
