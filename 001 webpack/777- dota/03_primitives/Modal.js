import React from 'react';

import './Modal.scss';
SvgCancel
import SvgCancel from '../05_svg/SvgCancel';

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
        let arrS = []; //simple skills
        let arrU = []; //ultimate skills
        let arrA = []; //aditional skills
        for(let i=0;i<abilities.length;i++){
            if(abilities[i].pos[0]==='s'){
                arrS[Number(abilities[i].pos[1])] = <img style={{width:'30px',border:'1px solid black'}} src={"./04_images/abilities/"+abilities[i].skill+".png"} key={abilities[i].key}/>
            }
            else if(abilities[i].pos[0]==='u'){
                arrU[Number(abilities[i].pos[1])] = <img style={{width:'30px',border:'1px solid black'}} src={"./04_images/abilities/"+abilities[i].skill+".png"} key={abilities[i].key}/>

            }
            else if(abilities[i].pos[0]==='a'){
                arrA[Number(abilities[i].pos[1])] = <img style={{width:'30px',border:'1px solid black'}} src={"./04_images/abilities/"+abilities[i].skill+".png"} key={abilities[i].key}/>
            }
        }
        return <div className="heroes">
            <div><img className="avatar" src={"./04_images/heroes/"+data.name+".png"}/></div>
            <div>{arrS}<span>{" "}</span>{arrU}</div>
            <div>{arrA}</div>
        </div>
    }
    _items=()=>{
        let {data:{data:{dname,img}},abilities,data} = this.props
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
                        <div className="close">
                            <SvgCancel className="cross" onClick={this.props.cbClose}/>
                            <div>close</div>
                        </div>
                        

                    </div>
                   
                    {this.props.data.type==='N'&&this._news()}
                    {this.props.data.type==='H'&&this._heroes()}
                    {this.props.data.type==='I'&&this._items()}
                </div>
                    
            </div>
		);

  	}

}



export default Modal