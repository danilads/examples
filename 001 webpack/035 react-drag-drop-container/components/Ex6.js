import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import './style.scss';

class Ex6 extends React.Component {
  

  render() {
    return (
      <div>
        <h6>Ex6 - highlightClassName при ховере (см. style.scss) работает быстрее чем Ex5</h6>
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
          highlightClassName="custom"
          targetKey="foo"
          dropData={{data: 'DropContainer data'}}
          onHit={(e)=>console.log('-DropContainer onHit')}
          onDragEnter={(e)=>console.log('-DropContainer onDragEnter')}
          onDragLeave={(e)=>console.log('-DropContainer onDragLeave')}
        >
            <div className='drop'>
              <div className='cover'>cover works!</div>
              <div>Drop Container <button onClick={()=>console.log('--run')}>CLICK</button></div>
            </div>
        </DropTarget>
      </div>
    );
  }
}

export default Ex6;