import React, {PureComponent} from 'react';


class RadioButton extends PureComponent {

  render() {

    return (
        <div>
          <input type={"radio"} name={'someGroup'}/>
        </div>
    );
  }

}



export default RadioButton;