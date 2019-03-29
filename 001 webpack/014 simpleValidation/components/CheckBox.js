import React, {PureComponent} from 'react';


class CheckBox extends PureComponent {

  render() {

    return (
        <div>
          <input type={"checkbox"} onChange={this.props.onChange}/>
          <input type={"checkbox"} onChange={this.props.onChange}/>
        </div>
    );
  }

}



export default CheckBox;