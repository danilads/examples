import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


class Ex9 extends React.Component {
  state={
      x: 0,
      y: 0
  }

  ref = React.createRef();

  componentDidMount(){
    document.addEventListener('mousemove', this.setMouse);
    document.addEventListener('touchmove', this.setTouch);
  }
  componentWillUnmount(){
    document.removeEventListener("mousemove", this.setMouse);
    document.removeEventListener("touchmove", this.setTouch);
  }
  setTouch=(e)=>{
    this.setState({x: e.touches[0].screenX, y: e.touches[0].screenY});
  }
  setMouse=(e)=>{
      this.setState({x: e.screenX, y: e.screenY});
  }
  render() {
    const {x,y} = this.state;
    return (
      <div>
        <h6>{`Ex9 - scroll ${x} ${y}`}</h6>
        {/* для drop должен быть targetKey */}

        <DragDropContainer
          targetKey="foo"
          dragData={{data: 'DragItem data'}}
          onDrop={(e)=>console.log('-DragItem onDrop')}
          onDragStart={(e)=>console.log('-DragItem onDragStart')}
          onDrag={(e)=>console.log('-DragItem onDrag')}
          onDragEnd={(e)=>console.log('-DragItem onDragEnd')}
        >
            <div>Drag Item</div>
        </DragDropContainer>
        <div ref={this.ref} style={{height: '500px', overflow: 'auto', border: '1px solid red'}}>
          {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29].map((it,ind)=>{
            return <DropTarget key={ind} targetKey="foo"><div style={{padding: '5px'}}>{`Drop Container ${it}`}</div></DropTarget>
          })}
        </div>      
      </div>
    );
  }
}

export default Ex9;