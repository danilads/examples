import React, {PureComponent} from 'react';

import connectedHoc from './connectedHoc';

class InputText extends PureComponent {

  render() {
    return (
        <div>
          <input type={"text"} onChange={(e)=>this.props.onChange(e.target.value)} defaultValue={this.props.defalultText}/>
        </div>
    );
  }

}



export default connectedHoc(InputText);