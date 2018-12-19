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
		curBtn3: '1', //текущая кнопка
		
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
		sort: "1",

		//пред состояние кнопки 3
		prevBut3: '1'


	};
	
	//если true - значит идет анимация
	isEngineRun = false;
	isEngine3Run = false;
	
	//timer
	timer = null;
	timer2 = null;


	
	

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
	


	engine3=()=>{
		let {status} = this.state;
		//если кнопка та же
		if(this.state.curBtn3===this.state.prevBut3){
			return;
		}
		
		//если происходит цикл смены анимации
		if(this.isEngine3Run){return;}

		this.isEngine3Run=true;
		this.setState({status:status[0]+status[1]+'-out',e3status:'out'})
	
		this.timer2 = setTimeout(() => {
			this.setState({status:status[0]+status[1]+'-in',e3status:'in',sort:this.state.curBtn3,prevBut3:this.state.curBtn3})
		},1000);
		this.timer2 = setTimeout(() => {
			if(this.timer2){
				this.setState({status:status[0]+status[1]+'-on',e3status:'on'},()=>{this.isEngine3Run=false,this.engine3()});
			}
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
		//обнуляем engine3
		this.isEngine3Run=false;
		//обнуляем анимацию кнопок 3 уровня
		this.timer2 = null;
	
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
				this.setState({status:'s-in',curBtn3:'1',prevBut3: '1',sort:'1'});
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
					this.setState({status:'cN-in',curBtn3:'1',prevBut3: '1',sort:'1'});
				},1000);
				this.timer = setTimeout(() => {
					this.setState({status:'cN-on'},()=>{this.isEngineRun=false;if((v!==curBtn2)||(v!==curBtn2)||(v!==curBtn2)){this.engine2()}})
				},2000);
			}
			if(curBtn2==='H'){
				this.timer = setTimeout(() => {
					this.setState({status:'cH-in',curBtn3:'1',prevBut3: '1',sort:'1'});
				},1000);
				this.timer = setTimeout(() => {
					this.setState({status:'cH-on'},()=>{this.isEngineRun=false;if((v!==curBtn2)||(v!==curBtn2)||(v!==curBtn2)){this.engine2()}})
				},2000);
			}
			if(curBtn2==='I'){
				this.timer = setTimeout(() => {
					this.setState({status:'cI-in',curBtn3:'1',prevBut3: '1',sort:'1'});
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

			//filter - latest to oldest
			if(sort==="1"){
				let arr = newsArr.sort((a, b)=> {
					if (a.date > b.date) {
						return -1;
					}
					if (a.date < b.date) {
						return 1;
					}
					return 0;		
				});
				for(let i=0;i<arr.length;i++){
					result.push(<Position_News key={arr[i].key}  data={arr[i]}/>);
				}
			}
			//filter - oldest to latest
			else if(sort==="2"){
				let arr = newsArr.sort((a, b)=> {
					if (a.date > b.date) {
						return 1;
					}
					if (a.date < b.date) {
						return -1;
					}
					return 0;		
				});
				for(let i=0;i<arr.length;i++){
					result.push(<Position_News key={arr[i].key}  data={arr[i]}/>);
				}
			}
			//filter - filter a-z
			else if(sort==="3"){
				let arr = newsArr.sort((a, b)=> {
					if (a.title.toLowerCase().trim() > b.title.toLowerCase().trim()) {
						return 1;
					}
					if (a.title.toLowerCase().trim() < b.title.toLowerCase().trim()) {
						return -1;
					}
					return 0;		
				});
				for(let i=0;i<arr.length;i++){
					result.push(<Position_News key={arr[i].key}  data={arr[i]}/>);
				}
			}
			//filter - filter z-a
			else if(sort==="4"){
				let arr = newsArr.sort((a, b)=> {
					if (a.title.toLowerCase().trim() > b.title.toLowerCase().trim()) {
						return -1;
					}
					if (a.title.toLowerCase().trim() < b.title.toLowerCase().trim()) {
						return 1;
					}
					return 0;		
				});
				for(let i=0;i<arr.length;i++){
					result.push(<Position_News key={arr[i].key}  data={arr[i]}/>);
				}
			}
			
			
			return <React.Fragment>{this._blockButtons(status.slice(2))}<div className={"content"+status.slice(2)+" e3-"+e3status}>{result}</div></React.Fragment>
		}
		//HEROES
		else if(status[1]==='H'){
			let heroesArr = heroes.data;
			let result = [];

			//filter - melee only
			if(sort==="1"){
				let preSort = heroesArr.sort((a, b)=> {
					if (a.name.toLowerCase().trim() > b.name.toLowerCase().trim()) {
						return 1;
					}
					if (a.name.toLowerCase().trim() < b.name.toLowerCase().trim()) {
						return -1;
					}
					return 0;		
				});
				let arr = [];
				for(let j=0;j<preSort.length;j++){
					if(preSort[j].atk=== "melee"){
						arr.push(preSort[j]);
					}
				}
				for(let i=0;i<arr.length;i++){
					result.push(<Position_Heroes key={arr[i].key}  data={arr[i]}/>);
				}	
			}
			//filter - range only
			else if(sort==="2"){
				let preSort = heroesArr.sort((a, b)=> {
					if (a.name.toLowerCase().trim() > b.name.toLowerCase().trim()) {
						return 1;
					}
					if (a.name.toLowerCase().trim() < b.name.toLowerCase().trim()) {
						return -1;
					}
					return 0;		
				});
				let arr = [];
				for(let j=0;j<preSort.length;j++){
					if(preSort[j].atk=== "ranged"){
						arr.push(preSort[j]);
					}
				}
				for(let i=0;i<arr.length;i++){
					result.push(<Position_Heroes key={arr[i].key} data={arr[i]}/>);
				}
			}
			//filter - filter a-z
			else if(sort==="3"){
				let arr = heroesArr.sort((a, b)=> {
					if (a.name.toLowerCase().trim() > b.name.toLowerCase().trim()) {
						return 1;
					}
					if (a.name.toLowerCase().trim() < b.name.toLowerCase().trim()) {
						return -1;
					}
					return 0;		
				});
				for(let i=0;i<arr.length;i++){
					result.push(<Position_Heroes key={arr[i].key}  data={arr[i]}/>);
				}
			}
			//filter - filter z-a
			else if(sort==="4"){
				let arr = heroesArr.sort((a, b)=> {
					if (a.name.toLowerCase().trim() > b.name.toLowerCase().trim()) {
						return -1;
					}
					if (a.name.toLowerCase().trim() < b.name.toLowerCase().trim()) {
						return 1;
					}
					return 0;		
				});
				for(let i=0;i<arr.length;i++){
					result.push(<Position_Heroes key={arr[i].key}  data={arr[i]}/>);
				}
			}
			return <React.Fragment>{this._blockButtons(status.slice(2))}<div className={"content"+status.slice(2)+" e3-"+e3status}>{result}</div></React.Fragment>
		}
		//ITEMS
		else if(status[1]==='I'){
			let itemsArr = items.data;
			let result = [];
			
			//filter - price low to high
			if(sort==="1"){
				let arr = itemsArr.sort((a, b)=> {
					if (a.cost > b.cost) {
						return 1;
					}
					if (a.cost < b.cost) {
						return -1;
					}
					return 0;		
				});
				for(let i=0;i<arr.length;i++){
					result.push(<Position_Items key={arr[i].key}  data={arr[i]}/>);
				}
			}
			//filter - price high to low
			else if(sort==="2"){
				let arr = itemsArr.sort((a, b)=> {
					if (a.cost > b.cost) {
						return -1;
					}
					if (a.cost < b.cost) {
						return 1;
					}
					return 0;		
				});
				for(let i=0;i<arr.length;i++){
					result.push(<Position_Items key={arr[i].key}  data={arr[i]}/>);
				}
			}
			//filter - filter a-z
			else if(sort==="3"){
				let arr = itemsArr.sort((a, b)=> {
					if (a.codeName.toLowerCase().trim() > b.codeName.toLowerCase().trim()) {
						return 1;
					}
					if (a.codeName.toLowerCase().trim() < b.codeName.toLowerCase().trim()) {
						return -1;
					}
					return 0;		
				});
				for(let i=0;i<arr.length;i++){
					result.push(<Position_Items key={arr[i].key}  data={arr[i]}/>);
				}
			}
			//filter - filter z-a
			else if(sort==="4"){
				let arr = itemsArr.sort((a, b)=> {
					if (a.codeName.toLowerCase().trim() > b.codeName.toLowerCase().trim()) {
						return -1;
					}
					if (a.codeName.toLowerCase().trim() < b.codeName.toLowerCase().trim()) {
						return 1;
					}
					return 0;		
				});
				for(let i=0;i<arr.length;i++){
					result.push(<Position_Items key={arr[i].key}  data={arr[i]}/>);
				}
			}
			return <React.Fragment>{this._blockButtons(status.slice(2))}<div className={"content"+status.slice(2)+" e3-"+e3status}>{result}</div></React.Fragment>
		}
		else if(status[0]==='s'){
			return <Spiner status={status}/>
		}
	}

	_blockButtons=(e)=>{
		let {status,curBtn2,curBtn3} = this.state;
		let dis=true;
		if(e==='-on'){
			dis=false;
		}
	
		let arrOfButtons=[];
		if(status[1]==='N'){
			arrOfButtons.push('latest to oldest');
			arrOfButtons.push('oldest to latest');
			arrOfButtons.push('filter a-z');
			arrOfButtons.push('filter z-a');
		}
		else if(status[1]==='H'){
			arrOfButtons.push('melee only');
			arrOfButtons.push('range only');
			arrOfButtons.push('filter a-z');
			arrOfButtons.push('filter z-a');
		}
		else if(status[1]==='I'){
			arrOfButtons.push('price low to high');
			arrOfButtons.push('price high to low');
			arrOfButtons.push('filter a-z');
			arrOfButtons.push('filter z-a');
		}
		
		return <React.Fragment>
				<div className="hid">
					<div className={"BlockButtons block"+e}>{arrOfButtons.map((it,ind)=>{
						let index = (ind+1).toString();
						return <ButtonLevel3 key={ind} dis={dis} isPushed={curBtn3===index} title={it} funcCB={()=>{this.setState({curBtn3:index},()=>{if(this._ismounted)this.engine3()}) }}/>
					})}
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
		clearTimeout(this.timer2);
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
	abilities: state.abilities,
	loadingN: state.news.loading,
	loadingH: state.heroes.loading,
	loadingI: state.items.loading,
	LoadedN: state.news.isLoaded,
	LoadedH: state.heroes.isLoaded,
	LoadedI: state.items.isLoaded,
}),
{loadNews,loadHeroes,loadItems})(Block_Filter);