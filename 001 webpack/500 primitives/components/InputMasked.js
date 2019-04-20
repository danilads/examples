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
  curText =""; // значение в инпуте с пробелами
  //нужно для выделение
  valueIn = "";
  prevValueIn = "";



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
        this.curText=newArr.slice(0,this.props.maxLength+8).join('');
        return newArr.slice(0,this.props.maxLength+8).join('');
      }
      this.curText=newArr.join('');
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
      // console.log('----------------------',this.cursorPosStart);
      // console.log('--length',this.curText.length);
      // console.log('--start',this.cursorPosStart);
      // console.log('--end',this.cursorPosEnd);
      if((this.state.text.length===prevState.text.length+1)||(this.state.text.length===prevState.text.length&&(this.state.text.length===this.props.maxLength||this.state.text.length===this.props.maxLength+1)&&this.valueIn.replace(/\s+/g, '').length===this.props.maxLength+1)){
        // console.log('-НАБОР ИЛИ СМЕЩЕНИЕ + КОГДА ТЕКСТ ПОЛНЫЙ ТОЖЕ');
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
      else if(this.state.text.length+1===prevState.text.length&&this.cursorPosStart===this.cursorPosEnd){
        // console.log('-УДАЛЕНИЕ');
        //удаление в середине
        if((this.cursorPosStart%5===0&&this.curText.length+1===this.cursorPosStart)||(this.curText.length>this.cursorPosStart||this.curText.length===this.cursorPosStart)){
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
      else if(this.state.text.length>prevState.text.length||this.props.maxLength&&(this.props.maxLength===this.state.text.length)){
        // console.log('-ВСТАВЛЯЕМ ТЕКСТ');
        // console.log('--pre',this.prevValueIn);
        // console.log('--cur',this.valueIn);


      }
      else if(this.cursorPosStart!==this.cursorPosEnd){
        // console.log('-УДАЛЯЕМ ВЫДЕЛЕНИЕМ');
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
    this.prevValueIn = this.valueIn;
    this.valueIn = currentValue;

    //удаление выделением
    if(this.cursorPosStart!==this.cursorPosEnd){
      // console.log('--удаление выделением');
    }
    //удаление одного символа перед пробелом в середине строки
    else if(text.length===prevValue.length-1&&(this.cursorPosStart)%5===0){
      //console.log('--удаление одного символа перед пробелом в середине строки ');
      text=text.slice(0,this.cursorPosStart-2)+text.slice(this.cursorPosStart-1);
    }
    //удаляем сиволы которые превышают maxLength
    if(typeof this.props.maxLength==="number"&&this.props.maxLength<text.replace(/\s+/g, '').length){
      let cutLength = text.replace(/\s+/g, '').length-this.props.maxLength;
      text=text.slice(0,-cutLength);
    }
    this.setState({text:text.replace(/\s+/g, '')});
    this.props.onChange(text.replace(/\s+/g, ''));
  };

  render() {
    let value = this.formatSpaces(this.props.value);
    return (
      <input onSelect={this.selectText} onChange={(e)=>this.change(e.target.value,value)} value={value} ref={this.containerRef} />
    );
  }
}

export default InputMasked;
