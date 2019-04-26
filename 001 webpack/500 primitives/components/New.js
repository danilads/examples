import React, {PureComponent} from 'react';


class New extends PureComponent {
  static propTypes = {};

  static defaultProps = {};
  state={
    text: ""
  };
  containerRef=React.createRef();

  cursorPosStart="";
  cursorPosEnd="";

  //здесь новый цикл форматирования еще не отработал (formMask)
  valueIn = ""; // текущее введенное значение  --valueIn 1234 56789
  prevValueIn = ""; // предыдущее текущее введенное значение  --prevValueIn 1234 56

  //после форматирования (formMask)
  valueInInput =""; // актуальное значение в инпуте  --valueInInput 1234 5678 9
  preValueInInput = ""; //актуальное значение в инпуте (до нажатия клавиши) --preValueInInput 1234 56

  actionIn = undefined; // null - если backspace dell или вставка даже если один символ
                        // один символ (строка) - если ввод одного сивола


  deleteType= undefined; // 'backward' - если backspace, 'forward' - если dell

  //счетчик paste чтобы понимать в componentDidUpdate когда мы делаем вставление
  prevPasteCounter=0;
  pasteCounter=1;

  pastedText="";


  formMask=(val)=>{
    if(typeof val==='string'){
      let text = val;
        
      //удаляем сиволы которые превышают maxLength
      if(typeof this.props.maxLength==="number"&&this.props.maxLength<val.replace(/\s+/g, '').length){
        let cutLength = text.replace(/\s+/g, '').length-this.props.maxLength;
        val=text.slice(0,-cutLength);
      }

      //очищаем форму от пред форматирования
      let arr = Array.from(val.replace(/\s+/g, ''));

      //вставляем пробелы
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
    //если курсор стоит перед пробелом или после -  мы удаляем пробел и символ
    else if(this.valueIn.length+1===this.preValueInInput.length){
      if(this.cursorPosStart%5===0 && this.deleteType === 'backward'){
        text=text.slice(0,this.cursorPosStart-2)+text.slice(this.cursorPosStart-1);
      }
      else if((this.cursorPosStart+1)%5===0 && this.deleteType === 'forward'){
        text=text.slice(0,this.cursorPosStart)+text.slice(this.cursorPosStart+1);
      }
      
    }
 

  
    //нужен для бага если текст один и тот же(1111 1111 и нажали еще 1 то рендера не будет)
    this.forceUpdate();

    //возвращаем текст без форматирования
    this.props.onChange(text.replace(/\s+/g, ''));
    //здесь можно вернуть текст с форматированием
  };
  
  pasteData=(e)=>{
    this.pastedText=e.clipboardData.getData('Text')
    this.pasteCounter+=1;
  };
 
  input=(e)=>{
    if(e.nativeEvent.inputType==='deleteContentBackward'){
      this.deleteType='backward'
    }
    else if(e.nativeEvent.inputType==='deleteContentForward'){
      this.deleteType='forward'
    }

    this.actionIn = e.nativeEvent.data;
  };
  render() {
    let value = this.formMask(this.props.value);
    return (<React.Fragment>
      <div><input onInput={this.input} onPaste={this.pasteData} onSelect={this.selectText} onChange={(e)=>this.change(e.target.value,value)} value={value} ref={this.containerRef} /></div>
      <br/>
      <div>КЕЙСЫ</div>
      <br/>
      <div>-1234 12xx xx34</div>
      <div>-вместо "xx xx" - вставляем "БОРР"</div>

      br/>
      <div>-1234 123x 3334</div>
      <div>-вместо "x "" - вставляем "Б"</div>

      <br/>
      <div>кейс с кнопокой delete</div>
      
    </React.Fragment>);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {


    if(this.containerRef.current&&this.containerRef.current.selectionStart&&typeof this.containerRef.current.selectionStart === 'number'){
      // console.log('----------------------');

      // console.log('--valueIn',this.valueIn);
      // console.log('--prevValueIn',this.prevValueIn);

      // console.log('--valueInInput',this.valueInInput);
      // console.log('--preValueInInput',this.preValueInInput);

      // console.log('--start',this.cursorPosStart);
      // console.log('--end',this.cursorPosEnd);

      if(this.valueIn.length===this.preValueInInput.length+1&&this.cursorPosStart===this.cursorPosEnd&&typeof this.actionIn === 'string'){
        console.log('-НАБОР ОДНОГО СИМВОЛА');
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
      else if(this.valueIn.length+1===this.preValueInInput.length&&this.cursorPosStart===this.cursorPosEnd&&this.actionIn===null){
        console.log('-УДАЛЕНИЕ ОДНОГО СИМВОЛА ');
        if(((this.cursorPosStart%5===0&&this.valueInInput.length+1===this.cursorPosStart)||(this.valueInInput.length>this.cursorPosStart||this.valueInInput.length===this.cursorPosStart))&&this.deleteType === 'backward'){
          // console.log('--удаление не в конце строки backward)');
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
        else if(((this.cursorPosStart%5===0&&this.valueInInput.length+1===this.cursorPosStart)||(this.valueInInput.length>this.cursorPosStart||this.valueInInput.length===this.cursorPosStart))&&this.deleteType === 'forward'){
          // console.log('--удаление не в конце строки forward)');
          if((this.cursorPosStart+1)%5===0){
            // console.log('--удаляем символ с пробелом');
            this.containerRef.current.selectionStart=this.cursorPosStart;
            this.containerRef.current.selectionEnd=this.cursorPosStart;
          }
          else{
            // console.log('--удаляем символ');
            this.containerRef.current.selectionStart=this.cursorPosStart;
            this.containerRef.current.selectionEnd=this.cursorPosStart;
          }
        }
        else{
          // console.log('--удаление в конце строки');
          this.containerRef.current.selectionStart=this.cursorPosStart;
          this.containerRef.current.selectionEnd=this.cursorPosStart;
        }
      }
      else if(this.valueIn.length+1<=this.preValueInInput.length && this.cursorPosStart!==this.cursorPosEnd && this.actionIn===null && this.prevPasteCounter===this.pasteCounter ){
        console.log('-УДАЛЯЕМ ВЫДЕЛЕНИЕМ (но не ввод текста)')
        if(this.actionIn === null && this.deleteType === 'backward'){
          // console.log('--использую backspace');
          this.containerRef.current.selectionStart=this.cursorPosStart;
          this.containerRef.current.selectionEnd=this.cursorPosStart;
        }
        else if(this.actionIn === null && this.deleteType === 'forward'){
          // console.log('--использую dell');
          this.containerRef.current.selectionStart=this.cursorPosStart+1;
          this.containerRef.current.selectionEnd=this.cursorPosStart+1;
        }
        
      }
      else if(this.cursorPosStart!==this.cursorPosEnd && typeof this.actionIn === 'string' && this.prevPasteCounter===this.pasteCounter){
        console.log('-ЗАМЕНЯЕМ ВЫДЕЛЕННЫЙ ТЕКСТ ОДНИМ СИВОЛОМ')
        if((this.cursorPosStart+1)%5===0){
          this.containerRef.current.selectionStart=this.cursorPosStart+2;
          this.containerRef.current.selectionEnd=this.cursorPosStart+2;
        }
        else{
          this.containerRef.current.selectionStart=this.cursorPosStart+1;
          this.containerRef.current.selectionEnd=this.cursorPosStart+1;
        }
       
      }
      else if(this.prevPasteCounter!==this.pasteCounter && this.cursorPosStart!==this.cursorPosEnd){
        console.log("-ЗАМЕНЯЕМ ВЫДЕЛЕННЫЙ Paste'ом")

      }
      else if(this.prevPasteCounter!==this.pasteCounter){
        console.log("-ОБЫЧНЫЙ Paste")
      }
    }
     this.prevPasteCounter=this.pasteCounter;
  }

}

export default New;
