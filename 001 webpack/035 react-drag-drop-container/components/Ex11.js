import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import './style.scss';

class Ex11 extends React.Component {
  state={
    isLibraryDragStart: false, //когда библиотека пишет что drag начался
    isRealDragStart: false //реальный драг
  }

  

  mouseDownWithDelay=(e)=>{
    console.log('')
  }


  render() {
    const {isRealDragStart} = this.state;
    return (
      <div>
        <h6>Ex11 - драг с задержкой (нужно редактировать либу)</h6>
        <div
          onMouseDown={(e)=>{
            e.stopPropagation();
            console.log('--MouseDown1')
          }}
        >
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

export default Ex11;