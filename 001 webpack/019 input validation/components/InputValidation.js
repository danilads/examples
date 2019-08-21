import React,{Fragment} from 'react';
import {IMaskInput} from 'react-imask';
import './InputValidation.scss'
import InpValidIcon from './InpValidIcon.js';


class InputValidation extends React.PureComponent {
    state={
        labelText: 'Label text label text label text label text label text label text label text label text label text label text',
        errorText: 'Error text error text error text error text error text error text error text error text error text error text',
        labelOpacity: false,
        labelFullText: false,
        errorOpacity: false,
        errorFullText: false,

        isToched: false,
        isFocused: false,
        isValid: false,

    }
    containerRefLabel = React.createRef();
    containerRefError = React.createRef();

	textOpacity=(ref, innerText, control)=>{
        let block = ref;
        let text = innerText;
     
        block.innerHTML = text;
        if (block.scrollHeight - block.offsetHeight > 1) {
            this.setState({[control]:true});
            const wordArray = text.split(' ');
            let deletedWord = '';
            while (block.scrollHeight - block.offsetHeight > 1) {
                deletedWord = wordArray.pop();
                block.innerHTML = wordArray.join(' ');
            }
            wordArray.push(deletedWord);
            let txt1 = wordArray.join(' ');
            const textArray = [...text];
            block.innerHTML = txt1;
            while (block.scrollHeight - block.offsetHeight > 1) {
                textArray.pop();
                txt1 = textArray.join('');
                block.innerHTML = txt1;
            }
            const gra = textArray.splice(textArray.length - 5, 5).map((s, i, a) => `<span style='opacity: 0.${1 + (100 * (8 * (1 - (i / (a.length - 1)))))};'>${s}</span>`);
            txt1 = textArray.join('') + gra.join('');
            block.innerHTML = txt1;
        }
        else{
            this.setState({[control]:false});
        }
        
    };
    recountOpacity=()=>{
        this.textOpacity(this.containerRefLabel.current, this.state.labelText, 'labelOpacity');
        this.textOpacity(this.containerRefError.current, this.state.errorText, 'errorOpacity');
    }
	componentDidMount(){
        window.addEventListener('resize',this.recountOpacity);
        this.recountOpacity();
	}

    componentDidUpdate(prevProps, prevState){
        if(prevState.errorOpacity!==this.state.errorOpacity){
            this.recountOpacity();
        }
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.recountOpacity);
    }
    showFullText=(value, name)=>{
        if(name==='label'){
            this.setState({labelFullText:value});
        }
        else if(name==='error'){
            this.setState({errorFullText:value});
        }
    };

  

  	render() {
        let {labelOpacity, labelFullText, labelText, isFocused, isValid, errorOpacity, errorFullText, errorText} = this.state;
		return (
			<div className={"InputValidation"}>
                <div className={'labelBlock'}>
                    {labelOpacity&&<InpValidIcon name='label' cbShowText={this.showFullText}/>}
                    {labelFullText&&<div className="fullText">{labelText}</div>}
                    <div className="labelText" ref={this.containerRefLabel}></div></div>
                <input className={!isValid&&!isFocused?"errorInput":""} type={"input"}/>
                <div className={'errorBlock'}>
                    {errorOpacity&&<InpValidIcon name='error' cbShowText={this.showFullText}  letter={"e"} lowerCase/>}
                    {errorFullText&&<div className="fullText">{errorText}</div>}
                    <div className="errorText" ref={this.containerRefError}></div>
                    
                </div>
                
            </div>
         
		);

  	}

}



export default InputValidation;
