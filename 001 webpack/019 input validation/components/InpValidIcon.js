import React,{Fragment} from 'react';
import './InpValidIcon.scss'

export default class InpValidIcon extends React.PureComponent {
    state={
        width:0
    }
    static defaultProps = {
        letter: "i",
        lowerCase: false
    }
    onResizeScreen=(w,h)=>{
        this.setState({width:h});
    };
    handlerClick=()=>{
       this.props.cbShowText(true, this.props.name);
    }
    handlerOut=()=>{
        this.props.cbShowText(false, this.props.name);
    }
  	render() {

		return (
			<div className={'InpValidIcon'} onClick={this.handlerClick} onMouseOut={this.handlerOut}>
              <div style={{height:`${this.props.lowerCase?'17px':'16px'}`, textAlign: 'center', width: '12px'}}>{this.props.letter}</div>
			</div>
		);

  	}

}

