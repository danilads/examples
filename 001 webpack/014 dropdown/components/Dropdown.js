import React, {Fragment,PureComponent,createRef} from 'react';

import './Dropdown.scss';

class Dropdown extends PureComponent {
	
	state = {
		isOpened: false,
	};
	mainContainer = createRef();
	dropContainer = createRef();
	openCloseFunc=(e)=>{
		//if send atr
		if(e===true){
			this.setState({isOpened:this.state.e});
		}
		else if(e===false){
			this.setState({isOpened:this.state.e});
		}
		//toggle
		else{
			this.setState({isOpened:!this.state.isOpened});
		}
	};
	clickOutside=(e)=>{
		const dropContainer = this.dropContainer.current;
		const mainContainer = this.mainContainer.current;

		if (!dropContainer.contains(e.target)&&!mainContainer.contains(e.target)) {
			this.openCloseFunc(false);
		}
	
	};
	_renderDrop=()=>{
		return (
			<div className={"SDWC_dropContent"}>
				dropcontent
			</div>
		);
	};
	_renderSVG=()=>{
		return <svg width="22" height="22" viewBox="-1 -1 22 22"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
	}
	
	componentDidMount() { 
		document.addEventListener("click", this.clickOutside);
	};
	componentWillUnmount(){
		document.removeEventListener("click", this.clickOutside);
	};
  	render() {
		let {isOpened} = this.state;
		return (
			<div className={'SelectDropdownWithCheckboxes'}>
				<div className={isOpened?'SDWC_content-hover':'SDWC_content'} ref={this.mainContainer} onClick={this.openCloseFunc}>
					<div className={'SDWC_title'}>some title some title some title some title</div>
					<div className={isOpened?'SDWC_chevron-down':'SDWC_chevron'}>{this._renderSVG()}</div>
				</div>
				<div className={'SDWC_dropContainer'} ref={this.dropContainer}>{isOpened&&this._renderDrop()}</div>
			</div>
		);
  	}

}



export default Dropdown;
