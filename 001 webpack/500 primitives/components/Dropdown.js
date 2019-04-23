import React, {Fragment,PureComponent,createRef} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Dropdown.scss';

class Dropdown extends PureComponent {
	//документация
	static propTypes = {
		className: PropTypes.string, //стиль
		cbClose: PropTypes.func, //колбек срабатывает при закрытии

		//controlled
		isOpened: PropTypes.bool, //прислывем если нам нужно контролировать данный компонент изВне
		controlFunction: PropTypes.func, //функция изменения состояния (e)=>{this.setState({isOpened:e})
		arrButtonsRef: PropTypes.array, //массив рефок кнопок, чтобы игнорировать clickOutside

		title: PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.string,
			PropTypes.object,
		]),
		dropContent: PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.string,
			PropTypes.object,
		]),
	};
	static defaultProps = {
    title: "title",
    dropContent: "content"
  };
	
	state = {
		isOpened: false,
	};
	

	mainContainer = createRef();
	dropContainer = createRef();
	
	
	openCloseFunc=(e)=>{
		//if send atr
		//open
		if(e===true){
			this.setState({isOpened:e});
			//controlled
			this.props.controlFunction&&this.props.controlFunction(e);
		}
		//close
		else if(e===false){
			this.setState({isOpened:e});
			this.props.cbClose && this.props.cbClose();
			//controlled
			this.props.controlFunction&&this.props.controlFunction(e);
		}
		//toggle
		else{
			this.setState({isOpened:!this.state.isOpened});
			if(this.state.isOpened){
				this.props.cbClose && this.props.cbClose();
			}
			//controlled
			this.props.controlFunction&&this.props.controlFunction(!this.state.isOpened);
		}

	};
	clickOutside=(e)=>{
		const dropContainer = this.dropContainer.current;
		const mainContainer = this.mainContainer.current;

		let arr = [];
		arr.push(this.dropContainer);
		arr.push(this.mainContainer);

		if(Array.isArray(this.props.arrButtonsRef)){
			arr = arr.concat(this.props.arrButtonsRef)
		}

		let counter=0;
		for(let i=0;i<arr.length;i++){
			if(!arr[i].current.contains(e.target)){
				counter++;
			}
		}
		if(counter===arr.length){
			this.openCloseFunc(false);
		}
	
	};

	_renderSVG=()=>{
		return <svg width="22" height="22" viewBox="-1 -1 22 22"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
	}

	//controlled
	componentDidUpdate(){
		if(typeof this.props.isOpened === 'boolean'){
			this.setState({isOpened:this.props.isOpened});
		}
	}

	componentDidMount() {
		//controlled
		if(typeof this.props.isOpened === 'boolean'){
			this.setState({isOpened:this.props.isOpened});
		}
		document.addEventListener("click", this.clickOutside);
	};
	componentWillUnmount(){
		document.removeEventListener("click", this.clickOutside);
	};
	render() {
		let {title,dropContent,className} = this.props;
		let {isOpened} = this.state;
	
		return (
			<div style={isOpened?{zIndex: 51}:{zIndex: 50}} className={classNames('Dropdown',className)}>
				<div className={'D_content'} style={isOpened?{border: "1px solid #313c47!important"}:{}} ref={this.mainContainer} onClick={this.openCloseFunc}>
				<div className={'D_head'}>
					{typeof title === 'function'?title({isOpened,openCloseFunc:this.openCloseFunc}):title}
				</div>
				<div className={isOpened?'D_chevron-down':'D_chevron'}>{this._renderSVG()}</div>
				</div>
				<div className={'D_dropContainer'} ref={this.dropContainer}>
				<div className={"D_dropContent"}>
					{isOpened&&(typeof dropContent === 'function'?dropContent({isOpened,openCloseFunc:this.openCloseFunc}):dropContent)}
				</div>
				</div>
			</div>
		);
  	}

}



export default Dropdown;
