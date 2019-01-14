import React from 'react';

import './Spiner.scss';
class Spiner extends React.PureComponent {
	
	state = {
		
	};

  	render() {

		return (
            <div className={"Spiner"}>
                <div className={"spinner"}>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
		);

  	}

}



export default Spiner;
