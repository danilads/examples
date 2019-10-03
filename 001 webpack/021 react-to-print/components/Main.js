import React from 'react';
import ReactToPrint from 'react-to-print';
 
class ComponentToPrint extends React.Component {
  render() {
    return (
      <table>
        <thead>
		  <tr>
			<th>column 1</th>
			<th>column 2</th>
			<th>column 3</th>
		  </tr>
        </thead>
        <tbody>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class Main extends React.PureComponent {
	
	
  	render() {
		
		return (
			<div>
				<ReactToPrint
					trigger={() => <a href="#">Print this out!</a>}
					content={() => this.componentRef}
				/>
				<ComponentToPrint ref={el => (this.componentRef = el)} />
			</div>
		);

  	}

}


export default Main;