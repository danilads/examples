import React from 'react';
import NewsFrame from '../03_primitives/NewsFrame';
import {Spiner} from '../03_primitives/Spiner';
import {connect} from "react-redux";
import {loadNews,loadHeroes,loadItems} from "../redux/actions";
import './Block_Filter.scss';
import ButtonLevel2 from '../03_primitives/ButtonLevel2';

class Block_Filter extends React.PureComponent {
	
	state = {
		//delete
		style:'in', //delete
		howToSort: false,  //delete
		list:[0,1,2,3,4,5,6], //delete

		//buttuns
		curBtn: '', //текущая кнопка
		
		//content Status

		//spinner
		//s-in s-out s-on s-off

		//content cI cN cH
		//cI-in cI-out cI-on cI-off
		status: '--', // для _contentRender

	};
	// ???? после фикса попробовать обе переменные вернуть в  state
	// ????
	//если true - значит идет анимация
	isEngineRun = false;
	
	//timer
	timer = null;

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

	

	buttons=(e)=>{
		let {reducer:{news, heroes, items}, loadNews, loadHeroes, loadItems, curBtn} = this.props;
		if(e===curBtn){return;}
		if(e==='N'){
			this.setState({curBtn:e},()=>{if(this._ismounted)this.engine(false)});
			if(!news.isLoaded&&!news.loading){
				loadNews();
			}
		}
		else if(e==='H'){
			this.setState({curBtn:e},()=>{if(this._ismounted)this.engine(false)});
			if(!heroes.isLoaded&&!heroes.loading){
				loadHeroes();
			}
		}
		else if(e==='I'){
			this.setState({curBtn:e},()=>{if(this._ismounted)this.engine(false)});
			if(!items.isLoaded&&!items.loading){
				loadItems();
			}
		}
	}
	

	//если с флагом true то это означает что запуск автоматический
	engine = () =>{
		let {status,curBtn} = this.state;
		let {LoadedN,LoadedH,LoadedI} = this.props;
		let v = status[1];
		//если кнопка та же
		if(curBtn===status[1]){
			return;
		}
		//если происходит цикл смены анимации
		if(this.isEngineRun){return;}
		
		//s-in s-out s-on s-off
		//cI-in cI-out cI-on cI-off
		
		// если запускаем таймер-анимацию то isEngineRun = true (блокируем запись в state) в конце делаем false
		
		// 0  кейс - если переключаем на другую а там тоже загрузка
		if((status==='s-on'&&curBtn==='N'&&!LoadedN)||(status==='s-on'&&curBtn==='H'&&!LoadedH)||(status==='s-on'&&curBtn==='I'&&!LoadedI)){
			//console.log('0  кейс');
		}
		// 1 кейс - первая загрузка
		else if(status==='--'){
			console.log('1  кейс');
			this.isEngineRun=true;
			this.setState({status:'s-in'})
			this.timer = setTimeout(() => {
				this.setState({status:'s-on'},()=>{this.isEngineRun=false;if((v!==curBtn)||(v!==curBtn)||(v!==curBtn)){this.engine(false)}})
			},1000);
		}
		// 2 кейс - если текущая позиция загружена, а нажатая еще не была
		else if((curBtn==='N'&&!LoadedN)||(curBtn==='H'&&!LoadedH)||(curBtn==='I'&&!LoadedI)){
			console.log('2  кейс');
			this.isEngineRun=true;
			this.setState({status:status[0]+status[1]+'-out'})
			this.timer = setTimeout(() => {
				this.setState({status:'s-in'});
			},1000);
			this.timer = setTimeout(() => {
				this.setState({status:'s-on'},()=>{this.isEngineRun=false;if((v!==curBtn)||(v!==curBtn)||(v!==curBtn)){this.engine(false)}})
			},2000);
		}
		else{
			this.isEngineRun=true;
			// 3.1 кейс - если идет загрузка и нужна переключить на готовую
			if(status[0]==='s'){
				console.log('3.1  кейс');
				this.setState({status:status[0]+'-out'})
			}
			// 3.2 кейс - переключение с уже загруженной на загруженную
			else{
				console.log('3.2  кейс');
				this.setState({status:status[0]+status[1]+'-out'})
			}
			if(curBtn==='N'){
				this.timer = setTimeout(() => {
					this.setState({status:'cN-in'});
				},1000);
				this.timer = setTimeout(() => {
					this.setState({status:'cN-on'},()=>{this.isEngineRun=false;if((v!==curBtn)||(v!==curBtn)||(v!==curBtn)){this.engine(false)}})
				},2000);
			}
			if(curBtn==='H'){
				this.timer = setTimeout(() => {
					this.setState({status:'cH-in'});
				},1000);
				this.timer = setTimeout(() => {
					this.setState({status:'cH-on'},()=>{this.isEngineRun=false;if((v!==curBtn)||(v!==curBtn)||(v!==curBtn)){this.engine(false)}})
				},2000);
			}
			if(curBtn==='I'){
				this.timer = setTimeout(() => {
					this.setState({status:'cI-in'});
				},1000);
				this.timer = setTimeout(() => {
					this.setState({status:'cI-on'},()=>{this.isEngineRun=false;if((v!==curBtn)||(v!==curBtn)||(v!==curBtn)){this.engine(false)}})
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
		let {status,loadingN,loadingH,loadingI,LoadedN,LoadedH,LoadedI} = this.state;
		
		//spinner
		if(status==='s-in'){
			return <div className={"spinner-in"}>
				<Spiner/>
			</div>
		}
		if(status==='s-on'){
			return <div className={"spinner"}>
				<Spiner/>
			</div>
		}
		if(status==='s-out'){
			return <div className={"spinner-out"}>
				<Spiner/>
			</div>
		}
		//news
		if(status==='cN-in'){
			return <div className={"spinner-in"}>
				News
			</div>
		}
		if(status==='cN-on'){
			return <div className={"spinner"}>
				News
			</div>
		}
		if(status==='cN-out'){
			return <div className={"spinner-out"}>
				News
			</div>
		}
		//heroes
		if(status==='cH-in'){
			return <div className={"spinner-in"}>
				Heroes
			</div>
		}
		if(status==='cH-on'){
			return <div className={"spinner"}>
				Heroes
			</div>
		}
		if(status==='cH-out'){
			return <div className={"spinner-out"}>
				Heroes
			</div>
		}
		//items
		if(status==='cI-in'){
			return <div className={"spinner-in"}>
				Items
			</div>
		}
		if(status==='cI-on'){
			return <div className={"spinner"}>
				Items
			</div>
		}
		if(status==='cI-out'){
			return <div className={"spinner-out"}>
				Items
			</div>
		}
	}

	
	componentDidUpdate(prevProps, prevState){
		let {status,curBtn} = this.state;
		let {LoadedN,LoadedH,LoadedI} = this.props;
		// если был спинер и нужно показать новости
		if((status==='s-on'&&curBtn==='N'&&LoadedN)||(status==='s-on'&&curBtn==='H'&&LoadedH)||(status==='s-on'&&curBtn==='I'&&LoadedI)){
			this.engine();
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
		let arr = this.changeArr()
		let {reducer, loadNews, loadHeroes, loadItems} = this.props;
		let {curBtn} = this.state;
		return (
			
			<div className="Block_Filter">
				<div className="BlockNav">
					<ButtonLevel2 isPushed={curBtn==='N'} title={'news'} funcCB={()=>this.buttons('N')}/>
					<ButtonLevel2 isPushed={curBtn==='H'} title={'heroes'} funcCB={()=>this.buttons('H')}/>
					<ButtonLevel2 isPushed={curBtn==='I'} title={'items'} funcCB={()=>this.buttons('I')}/>
				</div>

				<hr/>

				
				<div className="BlockButtons">
					<div className="btnLevel3">Selection</div>
					<div className="btnLevel3">Selection</div>
					<div className="btnLevel3">Selection</div>
					<div className="btnLevel3">Selection</div>
				</div>
				<hr/>
				<div className="BlockContent">
					{this._contentRender()}
				</div>


				{/* DEL THIS DOWN */}
				<div className="DELETE THIS">
					<div className={this.state.style}>{arr.map(it=>{
						return <NewsFrame key={it} title={it}/>})}
						<div><input type="button" onClick={this.changeArrFunc} value="filter"/></div>
						<input type="button" onClick={()=>this.changeStyle('in')} value="style in"/>
						<input type="button" onClick={()=>this.changeStyle('out')} value="style out"/>
						<input type="button" onClick={()=>this.changeStyle('static')} value="style static"/>
						<input type="button" onClick={()=>this.changeStyle('off')} value="style off"/>
					</div>
				</div>
				{/* DEL THIS UP */}

			</div>
			
		);

  	}

}




export default connect((state) => ({
	reducer: state.reducer,
	loadingN: state.reducer.news.loading,
	loadingH: state.reducer.heroes.loading,
	loadingI: state.reducer.items.loading,
	LoadedN: state.reducer.news.isLoaded,
	LoadedH: state.reducer.heroes.isLoaded,
	LoadedI: state.reducer.items.isLoaded,
}),
{loadNews,loadHeroes,loadItems})(Block_Filter);