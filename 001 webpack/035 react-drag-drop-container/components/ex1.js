import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


class Ex1 extends React.Component {
  render() {

    // we will use this as a custom drag element
    const customElem = <button style={{marginTop:20, marginLeft:20}}>Bananas!!</button> 

    const scrollBoxStyle = {
      width: 120, height: 200, overflow: 'scroll', marginTop: 40, border: '1px solid black',
    };

    return (
      <div style={{display: 'flex'}}>
        <h6>ex1 пример с офф сайта</h6>
        <div className="foods" style={scrollBoxStyle}>
          <Food targetKey="fruitsAndVeggies" label="orange" tastes="Delicious"/>
          <Food targetKey="dogFood" label="pickle" tastes="It tasted weird"/>
          <Food dragClone={true} dragElemOpacity={0.4} targetKey="dogFood" label="cheeseburger" tastes="Yummy"/>
          <Food customDragElement={customElem} targetKey="fruitsAndVeggies" label="bananas" tastes="Yummy"/>
        </div>
        <div className="animals">
            <Animal targetKey="fruitsAndVeggies" name="Kong">
            <div style={{width: '100px',height: '100px', border: '1px solid black' }}/>
              <h5>I eat fruit</h5>
            </Animal>

            <Animal targetKey="dogFood" name="Skippy">
              <div style={{width: '100px',height: '100px', border: '1px solid gray' }}/>
              <h5>I eat meat & pickles</h5>
            </Animal>

            <Animal targetKey="dogFood" name="Bozo">
              <Animal targetKey="fruitsAndVeggies" name="Bozo">
                <div style={{width: '100px',height: '100px', border: '1px solid green' }}/>
                <h5>I eat everything</h5>
              </Animal>
            </Animal>

        </div>
        <h3>Notes:</h3>
        <ul>
          <li><strong>targetKey</strong> to specify compatible drag items and drop targets.</li>
          <li><strong>dragData</strong> to pass the food name and taste ("Yummy", "Weird").</li>
          <li><strong>onDrop</strong> callback to tell the drag item what it was dropped on (shown in console.log).</li>
          <li><strong>customDragElement</strong> (on the bananas) to drag a custom element.</li>
          <li><strong>dragClone</strong> (on the cheeseburger) to drag a copy.</li>
          <li><strong>Trick:</strong> Wrap element in multiple DropTargets to handle different 
          types of data with different targetKeys (as on the trash can).</li>
        </ul>
      </div>
    )
  }
}

export default Ex1;

class Animal extends React.Component {
  constructor(props) {
      super(props);
      this.state = {thankYouMessage: ''};
  }

  dropped = (e) => {
      e.containerElem.style.visibility="hidden";
      this.setState({thankYouMessage: `Thanks for the ${e.dragData.label}! ${e.dragData.tastes}!`})
      console.log({'onHit event passed to target animal:':e});
  };

  render() {
      return (
      <DropTarget
          onHit={this.dropped}
          targetKey={this.props.targetKey}
          dropData={{name: this.props.name}}
      >
          <div className='animal'>
              <div style={{minHeight: 24, fontStyle: 'italic'}}>
                  {this.state.thankYouMessage}
              </div>
              {this.props.children}
          </div>
      </DropTarget>
      );
  }
}

class Food extends React.Component {
  landedOn(e) {
    console.log('I was dropped on ' + e.dropData.name)
    console.log({'onDrop event passed back to Food': e});
  }

  render() {
    // note use of render prop below, rather than child element
    return (
      <DragDropContainer
        targetKey={this.props.targetKey}
        dragClone={this.props.dragClone || false}
        dragData={{label: this.props.label, tastes: this.props.tastes}}
        customDragElement={this.props.customDragElement}
        onDrop={this.landedOn}
        render = {() => {
        return <div style={{overflow: 'hidden',width:'25px',height:'25px', border:'1px solid red'}}>{this.props.label}</div>
        }}
      />
        
    );
  }
}