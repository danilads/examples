import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


class Ex8 extends React.Component {
  

  render() {
    return (
      <div>
        <h6>Ex8 - no drag item </h6>
        {/* для drop должен быть targetKey */}

        <DragDropContainer
          targetKey="foo"
          dragHandleClassName={"canDrag"}
        >
            <div style={{border: '1px solid red', position: 'relative', width: '200px', height: '50px'}}>
              <div className="canDrag" style={{border: '1px solid green', position: 'absolute', width: '200px', height: '50px'}}>Drag Item</div>
              <button style={{position: 'absolute', bottom: '0', zIndex: '1'}}>no drag</button>
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

export default Ex8;