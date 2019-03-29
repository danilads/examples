import React, {PureComponent} from 'react';
import connectedHoc from './connectedHoc';

class CheckBox extends PureComponent {
  state={
    arr:[],
  }
  writeInRedux=(e)=>{
    //добавляем
    let arr = this.state.arr;
    if(e.target.checked){
      arr.push(e.target.value)
      this.setState({arr:arr})
    }
    //удаляем
    else{
      let ind = arr.indexOf(e.target.value);
      arr.splice(ind,1)
      this.setState({arr:arr});
    }
    this.props.onChange(this.state.arr);
  }
  render() {

    return (
        <div>
          <input type={"checkbox"} value={0} onChange={(e)=>this.writeInRedux(e)}/>
          <input type={"checkbox"} value={1} onChange={(e)=>this.writeInRedux(e)}/>
        </div>
    );
  }

}



export default connectedHoc(CheckBox);