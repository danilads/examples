import React from 'react';

import './Position.scss';

import {connect} from "react-redux";
import {modalOpen,modalClose} from "../redux/actions";
class Position_Heroes extends React.PureComponent {
	

	modal=()=>{
		this.props.modalOpen({type:'H',name:this.props.data.codeName,data:this.props.data});
	}
	_skills=(s,u,a)=>{
		let result=[];

		for(let i=0;i<s.length;i++){
			result.push(<span key={s[i].key}><img src={"./04_images/abilities/"+s[i].img+".png"}/><div className={"tooltip"}>{s[i].desc}</div></span>)
		}
		for(let i=0;i<u.length;i++){
			result.push(<span key={u[i].key}><img src={"./04_images/abilities/"+u[i].img+".png"}/><div className={"tooltip"}>{u[i].desc}</div></span>)
		}
		for(let i=0;i<a.length;i++){
			result.push(<span key={a[i].key}><img src={"./04_images/abilities/"+a[i].img+".png"}/><div className={"tooltip"}>{a[i].desc}</div></span>)
		}

		return result;
	}
  	render() {
		let {data,ab} = this.props;
		let arrS=[];
		let arrU=[];
		let arrA=[];
		for(let i=0;i<ab.length;i++){
			if(ab[i].hurl===data.codeName){
				if(ab[i].pos[0]==='s'){
					arrS[ab[i].pos[1]]={img:ab[i].skill,desc:ab[i].desc,key:ab[i].key};
				}
				else if(ab[i].pos[0]==='u'){
					arrU[ab[i].pos[1]]={img:ab[i].skill,desc:ab[i].desc,key:ab[i].key};
				}
				else if(ab[i].pos[0]==='a'){
					arrA[ab[i].pos[1]]={img:ab[i].skill,desc:ab[i].desc,key:ab[i].key};
				}
			}
		}
		return (
			<React.Fragment>
				<div className="Position" onClick={this.modal}>
					<div className="Heroes">
						<img className="avatar" src={"./04_images/heroes/"+data.codeName+".png"}/>
						<div className="title">{data.name}</div>
						<div className="bio" dangerouslySetInnerHTML={{__html: data.bio}}/>
						<div className="skills">
							{this._skills(arrS,arrU,arrA)}
						</div>
					</div>
				</div>
			</React.Fragment>	
		);

  	}

}



export default connect((state) => ({
	ab:state.abilities.data,
}),
{modalOpen,modalClose})(Position_Heroes);