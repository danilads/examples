import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {setError} from "../redux/actions";

class ValidComponent extends PureComponent {
  state={
    isErrorOn: false,
    isTouched: false,
  }

  

  componentDidUpdate(prevProps, prevState){
    let {validRules,validation,model,setError} = this.props;
    let isError = false;
    //01
    //кейс валидации текст
    if(validRules==="length<2"&&validation[model].value.length<2&&validation[model].isTouched){
      isError=true;
    }
    //02
    if(validRules==="checkNone"&&validation[model].value.length===0&&validation[model].isTouched){
      isError=true;
    }

    //чтобы небыло бесконечного цикла
    if(prevProps.validation[model].isValid!==isError){
      setError(isError,model);
    }
   
  }

  render() {
    return (
        <div>
          {this.props.validation[this.props.model].isValid&&<div>Show some error</div>}
          {React.createElement(this.props.component, {...this.props})}
        </div>
    );
  }

}



export default connect((state) => ({
  validation: state.validation
}),
{setError})(ValidComponent);