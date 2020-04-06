import React from 'react';

interface AppProps {
  /** button title */
  name: string
}

/**
 * Just simple button component
 */
class Button extends React.Component<AppProps> {
  static defaultProps={
    name:'hello'
  }
  render() {
    return <div>
          <button>{this.props.name}</button>
      </div>
  }
}


export default Button;