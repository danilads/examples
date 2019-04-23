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

  //поиск смещения
  findPhantomOffset=()=>{

  };

  componentDidUpdate(prevProps, prevState, snapshot) {


    if(this.containerRef.current&&this.containerRef.current.selectionStart&&typeof this.containerRef.current.selectionStart === 'number'){
      // console.log('----------------------');

      // console.log('--valueIn',this.valueIn);
      // console.log('--prevValueIn',this.prevValueIn);

      // console.log('--valueInInput',this.valueInInput);
      // console.log('--preValueInInput',this.preValueInInput);

      // console.log('--start',this.cursorPosStart);
      // console.log('--end',this.cursorPosEnd);
      if(this.valueIn.length===this.preValueInInput.length+1){
        console.log('-НАБОР ИЛИ ВСТАВКА ОДНОГО СИМВОЛА');
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
        console.log('-УДАЛЕНИЕ ИЛИ УДАЛЕНИЕ ОДНОГО СИМВОЛА ВЫДЕЛЕНИЕМ');
        if(this.cursorPosStart!==this.cursorPosEnd){
          // console.log('--удаление одного символа выделением');
          if((this.cursorPosStart+1)%5===0){
            // console.log('--удаление пробела');
            this.containerRef.current.selectionStart=this.cursorPosStart;
            this.containerRef.current.selectionEnd=this.cursorPosStart;
          }
          else{
            // console.log('--удаление символа');
            this.containerRef.current.selectionStart=this.cursorPosStart;
            this.containerRef.current.selectionEnd=this.cursorPosStart;
          }
        }
        else if((this.cursorPosStart%5===0&&this.valueInInput.length+1===this.cursorPosStart)||(this.valueInInput.length>this.cursorPosStart||this.valueInInput.length===this.cursorPosStart)){
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
      else if(this.valueIn.length>this.preValueInInput.length+1&&this.cursorPosStart===this.cursorPosEnd){
        console.log('-ВСТАВЛЯЕМ ТЕКСТ');
        this.containerRef.current.selectionStart=this.cursorPosStart+(this.valueIn.length-this.valueInInput.length);
        this.containerRef.current.selectionEnd=this.cursorPosStart+(this.valueIn.length-this.valueInInput.length);
        
      }
      else if(this.valueIn.length+1<this.preValueInInput.length && this.cursorPosEnd-this.cursorPosStart === this.preValueInInput.length-this.valueIn.length){
        console.log('-УДАЛЯЕМ ВЫДЕЛЕНИЕМ')
        this.containerRef.current.selectionStart=this.cursorPosStart;
        this.containerRef.current.selectionEnd=this.cursorPosStart;
      }
      else if(this.cursorPosStart!==this.cursorPosEnd){
        console.log('-ЗАМЕНЯЕМ ВЫДЕЛЕННЫЙ ТЕКСТ')
          //this.cursorPosStart -базовая точка
          // TODO
          // console.log('--text before',newArr.slice(0,this.props.maxLength+8).join('');)
          // console.log(this.preValueInInput);
      }
    }
  }
  selectText=()=>{
    this.cursorPosStart = this.containerRef.current&&this.containerRef.current.selectionStart;
    this.cursorPosEnd = this.containerRef.current&&this.containerRef.current.selectionEnd;
    // TODO
    // console.log('--Потенциально удаленные символы')

    // console.log('--valueIn',this.valueIn);
    // console.log('--prevValueIn',this.prevValueIn);

    // console.log('--valueInInput',this.valueInInput);
    // console.log('--preValueInInput',this.preValueInInput);
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
 

  
    //нужен для бага если текст один и тот же(1111 1111 и нажали еще 1 то рендера не будет)
    this.forceUpdate();

    //возвращаем текст без форматирования
    this.props.onChange(text.replace(/\s+/g, ''));
    //здесь можно вернуть текст с форматированием
  };

  render() {
    let value = this.formatSpaces(this.props.value);
    return (<React.Fragment>
      <div><input onSelect={this.selectText} onChange={(e)=>this.change(e.target.value,value)} value={value} ref={this.containerRef} /></div>
      <br/>
      <div>-1234 12xx xx34</div>
      <div>-вместо "xx xx" - вставляем "БОРР"</div>


      <div>-1234 123x 3334</div>
      <div>-вместо "x "" - вставляем "Б"</div>

      <br/>
      <div>КЕЙСЫ</div>
    </React.Fragment>);
  }
}

export default InputMasked;
