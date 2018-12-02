import React from 'react';

import './Block_Filter.scss';

import {connect} from "react-redux";
import {loadNews,loadHeroes,loadItems} from "../redux/actions";

import Position_News from '../03_primitives/Position_News';
import Position_Heroes from '../03_primitives/Position_Heroes';
import Position_Items from '../03_primitives/Position_Items';
import Spiner from '../03_primitives/Spiner';
import ButtonLevel2 from '../03_primitives/ButtonLevel2';
import ButtonLevel3 from '../03_primitives/ButtonLevel3';;

class Block_Filter extends React.PureComponent {
	state = {
		//buttuns
		curBtn2: '', //текущая кнопка
		
		//content Status

		//spinner
		//s-in s-out s-on s-off

		//content cI cN cH
		//cI-in cI-out cI-on cI-off
		status: '--', // для _contentRender

		//engine 3 status
		//on in out
		e3status: 'on',
		//sort
		sort: 1,

		//пред состояние кнопки 3
		prevBut3: ''


	};
	
	//если true - значит идет анимация
	isEngineRun = false;
	isEngine3Run = false;
	
	//timer
	timer = null;


	
	

	buttons2=(e)=>{
		let {news, heroes, items, loadNews, loadHeroes, loadItems} = this.props;
		if(e==='N'){
			this.setState({curBtn2:e},()=>{if(this._ismounted)this.engine2()});
			if(!news.isLoaded&&!news.loading){
				loadNews();
			}
		}
		else if(e==='H'){
			this.setState({curBtn2:e},()=>{if(this._ismounted)this.engine2()});
			if(!heroes.isLoaded&&!heroes.loading){
				loadHeroes();
			}
		}
		else if(e==='I'){
			this.setState({curBtn2:e},()=>{if(this._ismounted)this.engine2()});
			if(!items.isLoaded&&!items.loading){
				loadItems();
			}
		}
	}
	
	buttons3=(e)=>{
		if(e==='1'){
			this.setState({curBtn3:e},()=>{if(this._ismounted)this.engine3()});
		}
		else if(e==='2'){
			this.setState({curBtn3:e},()=>{if(this._ismounted)this.engine3()});
		}
		else if(e==='3'){
			this.setState({curBtn3:e},()=>{if(this._ismounted)this.engine3()});
		}
	}

	engine3=()=>{
		//если кнопка та же
		if(this.state.curBtn3===this.state.prevBut3){
			return;
		}

		//если происходит цикл смены анимации
		if(this.isEngine3Run){return;}

		this.isEngine3Run=true;
		this.setState({e3status:'out',prevBut3:this.state.curBtn3})
		this.timer = setTimeout(() => {
			this.setState({e3status:'in',sort:2})
		},1000);
		this.timer = setTimeout(() => {
			this.setState({e3status:'on'},()=>{this.isEngine3Run=false,this.engine3()});
		},2000);
	}

	
	engine2=()=>{
		let {status,curBtn2} = this.state;
		let {LoadedN,LoadedH,LoadedI} = this.props;
		let v = status[1];
		//если кнопка та же
		if(curBtn2===status[1]){
			return;
		}
		//если происходит цикл смены анимации
		if(this.isEngineRun){return;}
		
		//s-in s-out s-on s-off
		//cI-in cI-out cI-on cI-off
		
		// если запускаем таймер-анимацию то isEngineRun = true (блокируем запись в state) в конце делаем false
		
		// 0  кейс - если переключаем на другую а там тоже загрузка
		if((status==='s-on'&&curBtn2==='N'&&!LoadedN)||(status==='s-on'&&curBtn2==='H'&&!LoadedH)||(status==='s-on'&&curBtn2==='I'&&!LoadedI)){
			//console.log('0  кейс');
		}
		// 1 кейс - первая загрузка
		else if(status==='--'){
			//console.log('1  кейс');
			this.isEngineRun=true;
			this.setState({status:'s-in'})
			this.timer = setTimeout(() => {
				this.setState({status:'s-on'},()=>{this.isEngineRun=false;if((v!==curBtn2)||(v!==curBtn2)||(v!==curBtn2)){this.engine2()}})
			},1000);
		}
		// 2 кейс - если текущая позиция загружена, а нажатая еще не была
		else if((curBtn2==='N'&&!LoadedN)||(curBtn2==='H'&&!LoadedH)||(curBtn2==='I'&&!LoadedI)){
			//console.log('2  кейс');
			this.isEngineRun=true;
			this.setState({status:status[0]+status[1]+'-out'})
			this.timer = setTimeout(() => {
				this.setState({status:'s-in'});
			},1000);
			this.timer = setTimeout(() => {
				this.setState({status:'s-on'},()=>{this.isEngineRun=false;if((v!==curBtn2)||(v!==curBtn2)||(v!==curBtn2)){this.engine2()}})
			},2000);
		}
		else{
			this.isEngineRun=true;
			// 3.1 кейс - если идет загрузка и нужна переключить на готовую
			if(status[0]==='s'){
				//console.log('3.1  кейс');
				this.setState({status:status[0]+'-out'})
			}
			// 3.2 кейс - переключение с уже загруженной на загруженную
			else{
				//console.log('3.2  кейс');
				this.setState({status:status[0]+status[1]+'-out'})
			}
			if(curBtn2==='N'){
				this.timer = setTimeout(() => {
					this.setState({status:'cN-in'});
				},1000);
				this.timer = setTimeout(() => {
					this.setState({status:'cN-on'},()=>{this.isEngineRun=false;if((v!==curBtn2)||(v!==curBtn2)||(v!==curBtn2)){this.engine2()}})
				},2000);
			}
			if(curBtn2==='H'){
				this.timer = setTimeout(() => {
					this.setState({status:'cH-in'});
				},1000);
				this.timer = setTimeout(() => {
					this.setState({status:'cH-on'},()=>{this.isEngineRun=false;if((v!==curBtn2)||(v!==curBtn2)||(v!==curBtn2)){this.engine2()}})
				},2000);
			}
			if(curBtn2==='I'){
				this.timer = setTimeout(() => {
					this.setState({status:'cI-in'});
				},1000);
				this.timer = setTimeout(() => {
					this.setState({status:'cI-on'},()=>{this.isEngineRun=false;if((v!==curBtn2)||(v!==curBtn2)||(v!==curBtn)){this.engine2()}})
				},2000);
			}
		}
		
		
	}
	// !! здесь читаем state.status 
	//spinner
	//s-in s-out s-on s-off

	//content cI cN cH
	//cI-in cI-out cI-on cI-off
	_contentRender=()=>{
		let {sort,e3status,status,loadingN,loadingH,loadingI,LoadedN,LoadedH,LoadedI,curBtn3} = this.state;
		let {news, items, heroes} = this.props;
		
		//NEWS
		if(status[1]==='N'){
			let newsArr = news.data;
			let result = [];

			//filter
			if(sort===1){
				for(let i=0;i<newsArr.length;i++){
					result.push(<Position_News key={newsArr[i].key}  data={newsArr[i]}/>);
				}
			}
			else{
				for(let i=newsArr.length;i>0;i--){
					result.push(<Position_News key={newsArr[i-1].key} data={newsArr[i-1]}/>);
				}
			}
			
			return <React.Fragment>{this._blockButtons(status.slice(2))}<div className={"content"+status.slice(2)+" e3-"+e3status}>{result}</div></React.Fragment>
		}
		//HEROES
		else if(status[1]==='H'){
			let heroesArr = heroes.data;
			let result = [];

			//filter
			if(curBtn3==="1"){
				for(let i=0;i<heroesArr.length;i++){
					result.push(<Position_Heroes key={heroesArr[i].key}  data={heroesArr[i]}/>);
				}
			}
			else{
				for(let i=heroesArr.length;i>0;i--){
					result.push(<Position_Heroes key={heroesArr[i-1].key} data={heroesArr[i-1]}/>);
				}
			}
			
			return <React.Fragment>{this._blockButtons(status.slice(2))}<div className={"content"+status.slice(2)}>{result}</div></React.Fragment>
		}
		//ITEMS
		else if(status[1]==='I'){
			let itemsArr = items.data;
			let result = [];
			
			//filter
			if(curBtn3==="1"){
				for(let i=0;i<itemsArr.length;i++){
					result.push(<Position_Items key={itemsArr[i].key}  data={itemsArr[i]}/>);
				}
			}
			else{
				for(let i=itemsArr.length;i>0;i--){
					result.push(<Position_Items key={itemsArr[i-1].key} data={itemsArr[i-1]}/>);
				}
			}
			
			return <React.Fragment>{this._blockButtons(status.slice(2))}<div className={"content"+status.slice(2)}>{result}</div></React.Fragment>
		}
		else if(status[0]==='s'){
			return <Spiner status={status}/>
		}
	}

	_blockButtons=(e)=>{
		let {curBtn3} = this.state;
		let dis=true;
		if(e==='-on'){
			dis=false;
		}
		return <React.Fragment>
				<div className="hid">
					<div className={"BlockButtons block"+e}>
						<ButtonLevel3 dis={dis} isPushed={curBtn3==='1'} title={'filter a-z'} funcCB={()=>this.buttons3('1')}/>
						<ButtonLevel3 dis={dis} isPushed={curBtn3==='2'} title={'filter z-a'} funcCB={()=>this.buttons3('2')}/>
						<ButtonLevel3 dis={dis} isPushed={curBtn3==='3'} title={'filter some'} funcCB={()=>this.buttons3('3')}/>
					</div>
				</div>
				<div className="hid">
					<hr className={"hr"+e}/>
				</div>
			</React.Fragment>
	};
	componentDidUpdate(prevProps, prevState){
		let {status,curBtn2} = this.state;
		let {LoadedN,LoadedH,LoadedI} = this.props;
		// если был спинер и нужно показать новости
		if((status==='s-on'&&curBtn2==='N'&&LoadedN)||(status==='s-on'&&curBtn2==='H'&&LoadedH)||(status==='s-on'&&curBtn2==='I'&&LoadedI)){
			this.engine2();
		}
	}
	//warning fix
    //создаем переменную  при маунте
    //удаляем её при анмаунте
    //таким образом при проверке этой переменной можно узнать существует ли наш компонент
	componentDidMount() { 
		this._ismounted = true;
	}
	//чистим таймаут
	componentWillUnmount(){
		clearTimeout(this.timer);
		this._ismounted = false;
	}
	
  	render() {

		let {loadNews, loadHeroes, loadItems} = this.props;
		let {curBtn2,curBtn3} = this.state;
		
		return (
			<div className="Block_Filter">
				<div className="BlockNav">
					<ButtonLevel2 isPushed={curBtn2==='N'} title={'news'} funcCB={()=>this.buttons2('N')}/>
					<ButtonLevel2 isPushed={curBtn2==='H'} title={'heroes'} funcCB={()=>this.buttons2('H')}/>
					<ButtonLevel2 isPushed={curBtn2==='I'} title={'items'} funcCB={()=>this.buttons2('I')}/>
				</div>
				<hr/>
				<div className="BlockContent">
					{this._contentRender()}
				</div>
			</div>
		);
  	}
}

export default connect((state) => ({
	news: state.news,
	heroes: state.heroes,
	items: state.items,
	loadingN: state.news.loading,
	loadingH: state.heroes.loading,
	loadingI: state.items.loading,
	LoadedN: state.news.isLoaded,
	LoadedH: state.heroes.isLoaded,
	LoadedI: state.items.isLoaded,
}),
{loadNews,loadHeroes,loadItems})(Block_Filter);