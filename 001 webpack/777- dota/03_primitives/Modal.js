import React from 'react';

import './Modal.scss';


class Modal extends React.PureComponent {
    _news=()=>{
        let {data:{data:{contents,title,url}},abilities,data} = this.props
        console.log(this.props)
        return <div>
            <a href={url} target="_blank">{title}</a>
            <div dangerouslySetInnerHTML={{__html: contents}} />
        </div>
    }
	_heroes=()=>{
        let {data:{data:{name,codeName,bio}},abilities,data} = this.props
        return <div>
            <div><img src={"./04_images/heroes/"+data.name+".png"}/></div>
            <div>{abilities.map((it,key)=>{
                return <img style={{width:'30px',border:'1px solid black'}} src={"./04_images/abilities/"+it.skill+".png"} key={key}/>
            })}</div>
        </div>
    }
    _items=()=>{
        let {data:{data:{dname,img}},abilities,data} = this.props
       
        // console.log('--',dname);
        // console.log('--',data.data);

        return <div>
           <div>{dname}</div>
           <div><img src={"./04_images/items/"+img}/></div>
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
                <div className="content" onClick={this.modalPrevent}>
                    <div className="image">
                        <div className="glass"></div>
                        <div className="cont"><img src="./04_images/logoItem.gif"/></div>
                        <div className="cont"><div>Heroes</div></div>
                    </div>
                    <button onClick={this.props.cbClose}>close</button>
                    {this.props.data.type==='N'&&this._news()}
                    {this.props.data.type==='H'&&this._heroes()}
                    {this.props.data.type==='I'&&this._items()}
                </div>
                    
            </div>
		);

  	}

}



export default Modal