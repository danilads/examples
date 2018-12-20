import React from 'react';

import './Modal.scss';


class Modal extends React.PureComponent {
	_heroes=()=>{
        let {data:{data:{name,codeName,bio}},abilities:{data}} = this.props
        // console.log(name);
        console.log(codeName);
        // console.log(bio);
        for(let i=0;i<data.length;i++){
            if(data[i].hurl===codeName){
                console.log(data[i]);
            }

        }
        return <div>
            heroes

        </div>
    }
	modalPrevent=(e)=>{
        e.stopPropagation();
    }
  	render() {
		// console.log('--abilities',this.props.abilities);
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