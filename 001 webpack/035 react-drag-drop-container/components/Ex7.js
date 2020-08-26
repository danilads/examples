import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


class Ex7 extends React.Component {
  state={
    dragStartId: null
  }

  render() {
    const {dragStartId} = this.state;
    console.log('--state', dragStartId);
    return (
      <div>
        <h6>Ex7 - drag inside drag</h6>
        {/* для drop должен быть targetKey */}

        <DragDropContainer
          targetKey="foo"
          onDragStart={(e)=>{
            if(dragStartId === null){
              this.setState({dragStartId: 1});
            }
          }}
          onDragEnd={(e)=>this.setState({dragStartId: null})}
          noDragging={dragStartId === null ? false : dragStartId!==1}
        >
            <div>first level</div>
            <DragDropContainer
              targetKey="foo"
              onDragStart={(e)=>{
                if(dragStartId === null){
                  this.setState({dragStartId: 2});
                }
              }}
              onDragEnd={(e)=>this.setState({dragStartId: null})}
              noDragging={dragStartId === null ? false : dragStartId!==2}
            >
                <div>second level</div>
            </DragDropContainer>
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

export default Ex7;