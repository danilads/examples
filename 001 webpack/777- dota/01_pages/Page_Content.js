import React from 'react';


import './Page_Content.scss';

import DELnewsFrame from '../03_primitives/DELnewsFrame';
import Block_Filter from '../02_components/Block_Filter';

class Page_Content extends React.PureComponent {
	state = {
		//DEL THIS DOWN
		style:'in', //delete
		howToSort: false,  //delete
		list:[0,1,2,3,4,5,6], //delete
		//DEL THIS UP
	}
	// DEL THIS DOWN
	changeArr=()=>{
		let output = [];

		for(let n=0;n<this.state.list.length;n++){
			if(this.state.howToSort){
				output.push(this.state.list[n]);
			}
			else{
				output.push(this.state.list[this.state.list.length-n-1]);
			}
		}
		return output
	}
	changeArrFunc=()=>{
		this.setState({howToSort:!this.state.howToSort})
	}
	changeStyle=(e)=>{
		if(e==='in'){
			this.setState({style:'in'})
		}
		if(e==='out'){
			this.setState({style:'out'})
		}
		if(e==='static'){
			this.setState({style:'static'})
		}
		if(e==='off'){
			this.setState({style:'off'})
		}
	}
	// DEL THIS UP

	
  	render() {
		let arr = this.changeArr()
		let {reducer, loadNews, loadHeroes, loadItems} = this.props;
		let {curBtn2,curBtn3} = this.state;
		
		return (
			
			<div className="Page_Content container">
				<div className="row">
					<div className="col-12 img">img</div>
					<div className="col-12"><hr/></div>
					<div className="col-12">

						
						<Block_Filter/>
	
						{/* DEL THIS DOWN */}
						<div className="DELETE THIS">
							<div className={this.state.style}>{arr.map(it=>{
								return <DELnewsFrame key={it} title={it}/>})}
							</div>
							<div>
								<input type="button" onClick={this.changeArrFunc} value="filter"/>
								<input type="button" onClick={()=>this.changeStyle('in')} value="style in"/>
								<input type="button" onClick={()=>this.changeStyle('out')} value="style out"/>
								<input type="button" onClick={()=>this.changeStyle('static')} value="style static"/>
								<input type="button" onClick={()=>this.changeStyle('off')} value="style off"/>
							</div>
						</div>
						{/* DEL THIS UP */}
					</div>
				</div>	
			</div>
		);
  	}
}
export default Page_Content;

