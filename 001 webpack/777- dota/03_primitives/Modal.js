import React from 'react';

import './Modal.scss';


class Modal extends React.PureComponent {
	_heroes=()=>{
        let {data:{data:{name,codeName,bio}},abilities,data} = this.props
        // console.log(name);
        // console.log(codeName);
        // console.log(bio);

        console.log(data.name)
        // массив абилок
        // console.log(abilities);
        return <div>
            {name}
            <img src={"./04_images/heroes/abaddon.png"}/>
        </div>
    }
	modalPrevent=(e)=>{
        e.stopPropagation();
    }
  	render() {
		// console.log('--abilities',this.props.abilities);
		// console.log('--data',this.props.data);
		return (
			<div className="ModalHoc" onClick={this.props.cbClose}>
                <div onClick={this.modalPrevent}>
                
                helo
                <br/>
                helo
                <br/>
                <button onClick={this.props.cbClose}>shit</button>

                {this.props.data.type==='H'&&this._heroes()}
                </div>
                    
            </div>
		);

  	}

}



export default Modal