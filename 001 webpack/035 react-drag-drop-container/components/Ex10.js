import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import './style.scss';

class Ex10 extends React.Component {
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
    const {isRealDragStart} = this.state;
    return (
      <div>
        <h6>Ex10 - тень драгнутого элемента</h6>
        {/* для drop должен быть targetKey */}
        <div className={isRealDragStart ? 'ghostWrapWhenDragStart' : ''}>
          <DragDropContainer
            targetKey="foo"
            onDragStart={(e)=>this.setState({isLibraryDragStart: true})}
            onDragEnd={(e)=>this.setState({isLibraryDragStart: false, isRealDragStart: false})}
          >
              <div style={{width: '100%', background: '#cef'}}>Drag Item</div>
          </DragDropContainer>
        </div>
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

export default Ex10;