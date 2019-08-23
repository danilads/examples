import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './TextareaResize.scss'

//Readme
//  props.maxRow - (props.type==='textarea') максимальная длинна строк
//  props.autosize - (props.type==='textarea') если нужен саморазтягивающийся textarea
class TextareaResize extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      defaultAutosize: props.autosize,
      height: props.autosize || props.maxRow || 3, //умолчательное кол-во строк
      isCycle:false,
      text: "",
    }
  }

  static propTypes = {
    className: PropTypes.string,
    toUpper: PropTypes.bool,
    autosize: PropTypes.number, // передаем данный аргумент, если нужно динамическое изменение textarea по высоте без скрола (!Значение это - умолчательное кол-во строк)
    maxLength: PropTypes.number,
    maxRow: PropTypes.number,
  };

  static defaultProps = {
    toUpper: true
  };
  cursorPosStart="";
  cursorPosEnd="";

  keyPressed = false;

  setInputRef = ref => {
    const {innerRef} = this.props;
    this.textarea = ref;

    if (typeof innerRef === 'function')
      innerRef(ref);
    else if (typeof innerRef === 'object')
      innerRef.current = ref;
  };



  onKeyPress = (e) => {
    const {textarea} = this;

    let {maxLength} = this.props;

    if (typeof maxLength=== 'number' && textarea.value.length >= maxLength) {
      this.keyPressed = false;
      e.preventDefault()
    }
  };

  onKeyDown = (e) => {
    if (!e.ctrlKey && !e.altKey && e.keyCode >=47 && e.keyCode <=90) {
      this.keyPressed = true;
    }
  };

  onChange = e => {
    const {textarea, props: {toUpper: isToUpper, onChange}} = this;
    let value = textarea.value.replace(/\n/g, ' ');

    if (isToUpper) {
      value = value.toUpperCase();
    }
    let {maxLength} = this.props;

    if (typeof maxLength=== 'number' && this.keyPressed) {
      value = value.slice(0, maxLength);
      this.keyPressed = false
    }

    onChange&&onChange(value, e);

    this.cursorPosStart=textarea.selectionStart;
    this.cursorPosEnd=textarea.selectionEnd;
    this.setState({text:value});

  };

  resize=(prevStateText)=>{
    if(!prevStateText){
      prevStateText="";
    }


    let isEqual = true;
    if(this.state.text.length!==prevStateText.length){
      isEqual = false;
    }
    else{
      for(let i=0;i<this.state.text.length;i++){
        if(this.state.text[i]!==prevStateText[i]){
          isEqual = false;
        }
      }
    }

    let isLarge = this.textarea.scrollHeight > this.textarea.offsetHeight;

    if(!isEqual&&!isLarge){
      this.setState({height:this.state.defaultAutosize});
    }
    else if(isLarge && typeof this.props.maxRow === 'number' && this.state.height===this.props.maxRow){

    }
    else if(isLarge) {
      this.setState({height:this.state.height+1});
    }
  };
  componentDidMount() {
    let {value} = this.props;
    this.setState({text:typeof value === 'string'?value:''});
    this.state.defaultAutosize && this.resize();
  }

  componentDidUpdate(prevProps, prevState) {
    let {value} = this.props;
    this.setState({text:typeof value === 'string'?value:''});
    this.state.defaultAutosize && this.resize(prevState.text);

    if(this.props.value!==prevProps.value){
      this.textarea.setSelectionRange(this.cursorPosStart, this.cursorPosEnd);
    }
  }

  render() {
    let {className} = this.props;
    let {height} = this.state;

    return (
      <textarea
        className={`TextareaResize ${className?className:''}`}
        onChange={this.onChange}
        onKeyDown = {this.onKeyDown}
        onKeyPress = {this.onKeyPress}
        ref={this.setInputRef}
        rows={height}
      />
    );
  }
}

export default TextareaResize;
