import React from 'react';

import './Modal.scss';
SvgCancel
import SvgCancel from '../05_svg/SvgCancel';

class Modal extends React.PureComponent {
    _news=()=>{
        let {data:{data:{contents,title,url}},abilities,data} = this.props
        
        let result = '';
        let isContinue = false;

        let str=false;

        let isTag=false;
        for(let i=0;i<contents.length;i++){
            if(contents[i]==="["){
                isContinue=true;
                continue;
            }
            if(contents[i]==="]"){
                isContinue=false;
                continue;
            }

            if(contents[i]==="<"){
                isTag=true;
            }
            if(contents[i]===">"){
                isTag=false;
            }

            if(!isTag){
                if(contents[i]==="h"&&contents[i+1]==="t"&&contents[i+2]==="t"&&contents[i+3]==="p"){
                    isContinue=true;
                    str=true;
                }
                if(str&&contents[i]===" "){
                    isContinue=false;
                    str=false;
                }
            }
            
            if(!isContinue){
                result+=contents[i];
            }
           
        }
        return <div className="news">
            <a className="title" href={url} target="_blank">{title}</a>
            <hr/>
            <div className="text" dangerouslySetInnerHTML={{__html: result}} />
        </div>
    }
    
	_heroes=()=>{
        let {data:{data:{name,codeName,bio}},abilities,data} = this.props
        let arrS = []; //simple skills
        let arrU = []; //ultimate skills
        let arrA = []; //aditional skills
        for(let i=0;i<abilities.length;i++){
            if(abilities[i].pos[0]==='s'){
                arrS[Number(abilities[i].pos[1])] = <div className={"skill"} key={abilities[i].key}><img src={"./04_images/abilities/"+abilities[i].skill+".png"}/><div className="titl">{abilities[i].dname}</div><div className="typ">type: simple skill</div><div className="desc">{abilities[i].desc}</div></div>
            }
            else if(abilities[i].pos[0]==='u'){
                arrU[Number(abilities[i].pos[1])] = <div className={"skill"} key={abilities[i].key}><img src={"./04_images/abilities/"+abilities[i].skill+".png"}/><div className="titl">{abilities[i].dname}</div><div className="typ">type: ultimate</div><div className="desc">{abilities[i].desc}</div></div>

            }
            else if(abilities[i].pos[0]==='a'){
                arrA[Number(abilities[i].pos[1])] = <div className={"skill"} key={abilities[i].key}><img src={"./04_images/abilities/"+abilities[i].skill+".png"}/><div className="titl">{abilities[i].dname}</div><div className="typ">type: special</div><div className="desc">{abilities[i].desc}</div></div>
            }
        }

        return <div className="heroes">
            <div className="title">{name}</div>
            <hr/>
            <div className="topCont">
                <img className="avatar" src={"./04_images/heroes/"+data.name+".png"}/>
                <div className="bio" dangerouslySetInnerHTML={{__html: bio}}/>
            </div>
            <hr/>
            <div className="skillsTitle">skills</div>
            <hr/>
            <div className="skills">
                {arrS}
                {arrU}
                {arrA}
            </div>
            
        </div>
    }
    _items=()=>{
        let {data:{data:{dname,img,desc,attrib,cost,lore,qual}},abilities,data} = this.props
        return <div className="items">
                    <div className="title">{dname}</div>
                    <hr/>
                    <div className="cont">
                        <div className="imgWrap"><img src={"./04_images/items/"+img}/></div>
                        <div className="contWrap">
                            <div className="cost">{"cost: "+cost}</div>
                            <div className="cost">{"qual: "+qual}</div>
                            <div className="attr" dangerouslySetInnerHTML={{__html: attrib}} />
                        </div>
                        
                     
                    </div>
                    <hr/>
                    {desc!==""?<div className="desc" dangerouslySetInnerHTML={{__html: desc}} />:<div className="desc" dangerouslySetInnerHTML={{__html: lore}} />}
                    
                    
        </div>
    }
	modalPrevent=(e)=>{
        e.stopPropagation();
    }
  	render() {
		//console.log('--abilities',this.props.abilities);
		// console.log('--data',this.props.data);
		return (
			<div className="ModalHoc" onClick={this.props.cbClose}>
                <div className="content" onClick={this.modalPrevent}>
                    <div className="image">
                        <div className="glass"></div>
                        <div className="contImg"><img src="./04_images/logoItem.gif"/></div>
                        <div className="contText">
                            {this.props.data.type==='N'&&"News"}
                            {this.props.data.type==='H'&&"Heroes"}
                            {this.props.data.type==='I'&&"Items"}
                        </div>
                        <div className="close">
                            <SvgCancel className="cross" onClick={this.props.cbClose}/>
                            <div className="text">close</div>
                        </div>
                    </div>
                    <div className="title">
                        {this.props.data.type==='N'&&this._news()}
                        {this.props.data.type==='H'&&this._heroes()}
                        {this.props.data.type==='I'&&this._items()}
                    </div>
                </div>
                
                    
            </div>
		);

  	}

}



export default Modal