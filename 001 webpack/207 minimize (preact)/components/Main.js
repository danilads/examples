import { h, Component } from '../library/preact.js'
import { memoizeOne } from '../library/memoizeOne.js'
import './Main.scss';

export default class App extends Component {
	componentDidMount(){
		console.log('---didMount');
		this.request();
	}
	request=()=>{
		// Создаётся объект promise
		let promise = new Promise((resolve, reject) => {
			
			fetch("https://randomuser.me/api/?results=500", {
					method: 'GET',
				}).then( response => {
					resolve(response);
			});
		
		});
		
		// promise.then навешивает обработчики на успешный результат или ошибку
		promise
			.then(
			result => {
				// первая функция-обработчик - запустится при вызове resolve
				console.log(result); 
			},
			reject => {
				// вторая функция - запустится при вызове reject
				console.log(reject); 
			}
			);
	};

	memo = memoizeOne((a,b)=>{
		console.log('--memo3');
		this.setState({res3:a+b})
	});
  	render() {
		
      return (
        <div className="Main">
				<div className="container block">
					<div className="row">
						<div className="col-12"><div onClick={()=>this.memo(1,2)}>Обычный контейнер memoizeOne</div></div>
						<div className="col-md-3 Main-bold">1</div>
						<div className="col-md-3 Main">2</div>
						<div className="col-md-3 Main">3</div>
						<div className="col-md-3 Main">4</div>
						<div className="col-md-3 Main">4</div>
					</div>
				</div>

				<div className="row no-gutters block">
					<div className="col-12">но гатерс убирает отрицательный маргин</div>
					<div className="col-md-3 Main">2</div>
						<div className="col-md-3 Main">3</div>
						<div className="col-md-3 Main">4</div>
						<div className="col-md-3 Main">4</div>
				</div>

				<div className="container block">
					<div className="row">
						<div className="col-md-4">оффсет</div>
						<div className="col-md-4 offset-md-4 Main">4</div>
					</div>
				</div>

				

				<div className="container-fluid block">
					<div className="row">
						<div className="col-12">флуид</div>
						<div className="col-md-3 Main">1</div>
						<div className="col-md-3 Main">2</div>
						<div className="col-md-3 Main">3</div>
						<div className="col-md-3 Main">4</div>
					</div>
				</div>
			</div>
      );

  	}

}


