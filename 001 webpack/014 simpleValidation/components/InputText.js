import React, {PureComponent} from 'react';

import connectedHoc from './connectedHoc';

class InputText extends PureComponent {

  render() {
    return (
        <div>
          <input type={"text"} onChange={this.props.onChange} defaultValue={this.props.defalultText}/>
        </div>
    );
  }

}



export default connectedHoc(InputText);