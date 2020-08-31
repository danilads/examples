import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


class Ex5 extends React.Component {
  state={
    isLibraryDragStart: false, //когда библиотека пишет что drag начался
    isRealDragStart: false, //реальный драг
    enter: false,
    clickColor: 'red'
  }

  // react-drag-drop-container говорит что драг начался по клику
  // Данный фикс делает так - если мы двинули мышь то тогда это реальный драг
  setCursorPosition=(e)=>{
    if(this.state.isLibraryDragStart){
      this.setState({isRealDragStart: true});
    }
  }

  stopDragging=()=>{
    this.setState({isLibraryDragStart:false, isRealDragStart: false, enter: false});
  }

  stopDraggingWithTimeout=()=>{
    setTimeout(this.stopDragging, 1);
  }

  componentDidMount() { 
    document.addEventListener("mousemove", this.setCursorPosition);
    document.addEventListener("touchmove", this.setCursorPosition);
    document.addEventListener("mouseup", this.stopDraggingWithTimeout);
    document.addEventListener("touchend", this.stopDraggingWithTimeout);
  }

  componentWillUnmount(){
    document.removeEventListener("mousemove", this.setCursorPosition);
    document.removeEventListener("touchmove", this.setCursorPosition);
    document.removeEventListener("mouseup", this.stopDraggingWithTimeout);
    document.removeEventListener("touchend", this.stopDraggingWithTimeout);
  }


  render() {
    const {enter, isRealDragStart, clickColor} = this.state;
    console.log('--+ enter?', enter);
    return (
      <div>
        <h6>Ex5 - изменения содержимого (с наложением) при dragEnter</h6>
        {/* для drop должен быть targetKey */}

        <DragDropContainer
          targetKey="foo"
          onDragStart={(e)=>this.setState({isLibraryDragStart: true})}
          onDragEnd={this.stopDragging}
        >
            <div>Drag Item</div>
        </DragDropContainer>

        <DropTarget
          targetKey="foo"
          dropData={{data: 'DropContainer data'}}
          onHit={(e)=>console.log('-DropContainer onHit')}
          onDragEnter={(e)=>this.setState({enter: true})}
          onDragLeave={(e)=>this.setState({enter: false})}
        >
            <div style={{border: '1px solid gray', position: 'relative'}}>
              {/* БАГ с ховером нужно поверх повесить  */}
              {isRealDragStart && <div style={{position: 'absolute', zIndex:2, top: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0)'}} />}
              <div>Drop Container <button style={{color: clickColor}} onClick={()=>this.setState({clickColor: clickColor==='green'?'red':'green'})}>click</button></div>
              {enter && <div style={{position: 'absolute', zIndex:1, top: 0, width: '100%', height: '100%', background: 'rgba(122,3,43,0.5)'}} />}
            </div>
        </DropTarget>
      </div>
    );
  }
}

export default Ex5;