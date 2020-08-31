import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


class Ex0 extends React.Component {
  

  render() {
    return (
      <div>
        <h6>Ex0 - simple</h6>
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

export default Ex0;