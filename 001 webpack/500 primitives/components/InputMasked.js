import React, {PureComponent} from 'react';


class InputMasked extends PureComponent {
  static propTypes = {};

  static defaultProps = {};
  state={
    text: "",
  };
  containerRef=React.createRef();

  cursorPosStart="";
  cursorPosEnd="";
  valueInInput =""; // актуальное значение в инпуте 


  //здесь новый цикл форматирования еще не отработал (formatSpaces)
  valueIn = ""; // текущее введенное значение  --valueIn 1234 56789
  prevValueIn = ""; // предыдущее текущее введенное значение  --prevValueIn 1234 56

  //после форматирования (formatSpaces)
  valueInInput =""; // актуальное значение в инпуте  --valueInInput 1234 5678 9
  preValueInInput = ""; //актуальное значение в инпуте (до нажатия клавиши) --preValueInInput 1234 56



  formatSpaces=(val)=>{
    if(typeof val==='string'){
      let arr = Array.from(val.replace(/\s+/g, ''));

      let newArr = [];

      for(let i=1;i<=arr.length;i++){
        newArr.push(arr[i-1]);
        if(i%4===0&&i-1!==0&&arr.length!==i){
          newArr.push(' ');
        }
      }
      if(this.props.maxLength&&arr.length>this.props.maxLength){
        this.valueInInput=newArr.slice(0,this.props.maxLength+8).join('');
        return newArr.slice(0,this.props.maxLength+8).join('');
      }
      this.valueInInput=newArr.join('');
      return newArr.join('');
    }

  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.value!==this.props.value){
      let text = this.props.value;
      //удаляем сиволы которые превышают maxLength
      if(typeof this.props.maxLength==="number"&&this.props.maxLength<text.replace(/\s+/g, '').length){
        let cutLength = text.replace(/\s+/g, '').length-this.props.maxLength;
        text=text.slice(0,-cutLength);
      }
      this.setState({text:text});
    }
    if(this.containerRef.current&&this.containerRef.current.selectionStart&&typeof this.containerRef.current.selectionStart === 'number'){
      // console.log('--pre props',prevProps.value);
      // console.log('--cur props',this.props.value);
      // console.log('--pre state',prevState.text);
      // console.log('--cur state',this.state.text);
      //
      // console.log('----------------------');
      // console.log('--length',this.valueInInput.length);

      console.log('--valueIn',this.valueIn);
      console.log('--prevValueIn',this.prevValueIn);

      console.log('--valueInInput',this.valueInInput);
      console.log('--preValueInInput',this.preValueInInput);

      // console.log('--start',this.cursorPosStart);
      // console.log('--end',this.cursorPosEnd);
      if(this.valueIn.length===this.preValueInInput.length+1){
        console.log('-НАБОР ИЛИ СМЕЩЕНИЕ + КОГДА ТЕКСТ ПОЛНЫЙ ТОЖЕ');
        if((this.cursorPosStart+1)%5===0){
          // console.log('--смещаем на 1');
          this.containerRef.current.selectionStart=this.cursorPosStart+2;
          this.containerRef.current.selectionEnd=this.cursorPosStart+2;
        }
        else{
          // console.log('--не смещаем');
          this.containerRef.current.selectionStart=this.cursorPosStart+1;
          this.containerRef.current.selectionEnd=this.cursorPosStart+1;
        }
      }
      else if(this.valueIn.length+1===this.preValueInInput.length){
        console.log('-УДАЛЕНИЕ');
        //удаление в середине
        if((this.cursorPosStart%5===0&&this.valueInInput.length+1===this.cursorPosStart)||(this.valueInInput.length>this.cursorPosStart||this.valueInInput.length===this.cursorPosStart)){
          //если удаляем один символ со смещением
          // console.log('--удаление не в конце строки');
          if(this.cursorPosStart%5===0){
            // console.log('--удаляем символ с пробелом');
            this.containerRef.current.selectionStart=this.cursorPosStart-2;
            this.containerRef.current.selectionEnd=this.cursorPosStart-2;
          }
          else{
            // console.log('--удаляем символ');
            this.containerRef.current.selectionStart=this.cursorPosStart-1;
            this.containerRef.current.selectionEnd=this.cursorPosStart-1;
          }
        }
        else{
          // console.log('--удаление в конце строки');
          this.containerRef.current.selectionStart=this.cursorPosStart;
          this.containerRef.current.selectionEnd=this.cursorPosStart;
        }
      }
      else if(this.valueIn.length>this.preValueInInput.length+1){
        console.log('-ВСТАВЛЯЕМ ТЕКСТ');
        // console.log('--pre',this.prevValueIn);
        // console.log('--cur',this.valueIn);


      }
      else if(this.valueIn.length+1<this.preValueInInput.length){
        console.log('-УДАЛЯЕМ ВЫДЕЛЕНИЕМ');
      }
      // TODO
      // удаление проебла выделением
      // удаление выделением
      // встваляем один и более
      // встваляем один и более когда текст полный

    }
  }
  selectText=()=>{
    this.cursorPosStart = this.containerRef.current&&this.containerRef.current.selectionStart;
    this.cursorPosEnd = this.containerRef.current&&this.containerRef.current.selectionEnd;
  };
  change=(currentValue,prevValue)=>{
    let text = currentValue;
    // нужно отслеживания когда мы встваляем текст
    this.preValueInInput = prevValue;
    this.prevValueIn = this.valueIn;
    this.valueIn = currentValue;
    
    //удаление выделением
    if(this.cursorPosStart!==this.cursorPosEnd){
      // console.log('--удаление выделением');
    }
    //если курсор стоит перед пробелом и мы удаляем, то нужно удалить и пробел и перд символ
    else if(this.valueIn.length+1===this.preValueInInput.length && this.cursorPosStart%5===0){
      text=text.slice(0,this.cursorPosStart-2)+text.slice(this.cursorPosStart-1);
    }
 

    //удаляем сиволы которые превышают maxLength
    if(typeof this.props.maxLength==="number"&&this.props.maxLength<text.replace(/\s+/g, '').length){
      let cutLength = text.replace(/\s+/g, '').length-this.props.maxLength;
      text=text.slice(0,-cutLength);
    }
    
    //нужен для бага если текст один и тот же(1111 1111 и нажали еще 1 то рендера не будет)
    this.forceUpdate();
    this.setState({text:text.replace(/\s+/g, '')});
    this.props.onChange(text.replace(/\s+/g, ''));
  };

  render() {
    let value = this.formatSpaces(this.props.value);
    return (<React.Fragment>
      <div><input onSelect={this.selectText} onChange={(e)=>this.change(e.target.value,value)} value={value} ref={this.containerRef} /></div>
      <br/>
      <div>-НАБОР ИЛИ СМЕЩЕНИЕ + КОГДА ТЕКСТ ПОЛНЫЙ ТОЖЕ</div>
      <div>-УДАЛЕНИЕ</div>
      <div>-ВСТАВЛЯЕМ ТЕКСТ(Но не 1 символ)</div>
      <div>-УДАЛЯЕМ ВЫДЕЛЕНИЕМ(Но не 1 символ)</div>
      <br/>
      <div>КЕЙСЫ</div>
    </React.Fragment>);
  }
}

export default InputMasked;
