import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import './Block_MainPage.scss';
class Block_MainPage extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		return (
			<div className="Block_MainPage">
				<div className="container block">
					<div className="row">
						<div className="col-12"><Filter>Обычный контейнер</Filter></div>
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



export default Block_MainPage;
