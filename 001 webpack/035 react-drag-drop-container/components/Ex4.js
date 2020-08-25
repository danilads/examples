import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


class Ex4 extends React.Component {
  state={
    isLibraryDragStart: false, //когда библиотека пишет что drag начался
    isRealDragStart: false //реальный драг
  }

  // react-drag-drop-container говорит что драг начался по клику
  // Данный фикс делает так - если мы двинули мышь то тогда это реальный драг
  setCursorPosition=(e)=>{
    if(this.state.isLibraryDragStart){
      this.setState({isRealDragStart: true});
    }
  }



  componentDidMount() { 
    document.addEventListener("mousemove", this.setCursorPosition);
    document.addEventListener("touchmove", this.setCursorPosition);
  }

  componentWillUnmount(){
    document.removeEventListener("mousemove", this.setCursorPosition);
    document.removeEventListener("touchmove", this.setCursorPosition);
  }


  render() {
    console.log('--isDrag',this.state.isRealDragStart);
    return (
      <div>
        <h6>Ex4 - начало драга только если мышь сместилась</h6>
        <DragDropContainer
          targetKey="foo"
          onDragStart={(e)=>this.setState({isLibraryDragStart: true})}
          onDragEnd={(e)=>this.setState({isLibraryDragStart: false, isRealDragStart: false})}
        >
            <div style={{margin: '5px', padding: '5px'}}>Drag Item
              <button onClick={()=>console.log('CLICK')}>click</button>
            </div>
        </DragDropContainer>

        <DropTarget
          targetKey="foo"
          dropData={{data: 'DropContainer data'}}
          onHit={(e)=>console.log('-DropContainer onHit')}
          onDragEnter={(e)=>console.log('-DropContainer onDragEnter')}
          onDragLeave={(e)=>console.log('-DropContainer onDragLeave')}
        >
            <div>Drop Container</div>
        </DropTarget>
      </div>
    );
  }
}

export default Ex4;