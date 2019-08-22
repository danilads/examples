import React,{Fragment} from 'react';
import {IMaskInput} from 'react-imask';
import './InputValidation.scss'
import InpValidIcon from './InpValidIcon.js';


class InputValidation extends React.PureComponent {
    state={
        labelText: 'Labeltextlabeltextlabeltext',
        errorText: 'Errortexterrortexterrortext',
        labelOpacity: false,
        labelFullText: false,
        errorOpacity: false,
        errorFullText: false,

        value:'',

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
        //баг с опасити (из-за иконки слева(он исчезает))
        if(prevState.errorOpacity!==this.state.errorOpacity){
            this.recountOpacity();
        }
        //здесь проверяем валидацию (валидация в регэксе)
        
        

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
    handleFocus=(focus)=>{
        this.setState({isToched:true, isFocused:focus});
    }
  
    handlerChange=(e)=>{
        this.setState({value:e.target.value})
    }
  	render() {
        let {value, labelOpacity, labelFullText, labelText, isFocused, isValid, errorOpacity, errorFullText, errorText, isToched} = this.state;
        console.log('---isToched',isToched);
        return (
			<div className={"InputValidation"}>
                <div className={'labelBlock'}>
                    {labelOpacity&&<InpValidIcon name='label' cbShowText={this.showFullText}/>}
                    {labelFullText&&<div className="fullText">{labelText}</div>}
                    <div className="labelText" ref={this.containerRefLabel}></div></div>

                <input value={value} onChange={this.handlerChange} className={!isValid&&!isFocused&&isToched?"errorInput":""} type={"input"} onFocus={()=>this.handleFocus(true)} onBlur={()=>this.handleFocus(false)}/>
                
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
