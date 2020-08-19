import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import './style.scss';

class Ex3 extends React.Component {
  state={
    list:['it1','it2','it3','it4']
  }

  render() {
    return (
      <div>
        <h6>Ex3 - свап симпл</h6>
        {/* свап симпл */}
        <SwapList
          changeList={e=>this.setState({list:e})}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default Ex3;

class SwapList extends React.Component {
  state={
    dragStart: false, // начался процесс
    dragIndex: null, // индекс элемента который тянем
    highlightIndex: null // что подсвечиваем
  }
  
  // БАГ когда кликаешь один раз
  componentDidMount() { 
    document.addEventListener("mouseup", this.stopDraggingWithTimeout);
    document.addEventListener("touchend", this.stopDraggingWithTimeout);
  }

  componentWillUnmount(){
    document.removeEventListener("mouseup", this.stopDraggingWithTimeout);
    document.removeEventListener("touchend", this.stopDraggingWithTimeout);
  }

  stopDraggingWithTimeout=()=>{
    setTimeout(this.stopDragging, 1);
  }

  stopDragging=()=>{
    this.setState({dragStart:false, dragIndex: null, highlightIndex: null});
  }

  canDrop=(index)=>{
    
    const curItem = this.state.dragIndex;
    const hoverLine = index; // линия дропа
    
    if(curItem-1 === hoverLine || curItem === hoverLine){
      return false;
    }
    else{
      return true;
    }
  }

  changeList=(index)=>{
    if(this.canDrop(index)){
      let newList = [...this.props.list];
      const curItem = this.state.dragIndex;
      const hoverLine = index; // линия дропа
      const item = this.props.list[curItem];

      if(curItem>hoverLine){
        newList.splice(curItem,1);
        newList.splice(hoverLine+1, 0, item)
        this.props.changeList(newList);
      }
      else{
        newList.splice(curItem,1);
        newList.splice(hoverLine, 0, item)
        this.props.changeList(newList);
      }
    }
  }

  renderItem=(list)=>{

    const result = [];

    list.forEach((item, index)=>{
      result.push(
        // Для изменения ширины плашки
        <div key={item} style={{position: 'relative'}} className={'fixWidth'}>
          {/* HARDCODED область для дропа BEFORE (индекс -1) только для 0 элмента */}
          {this.state.dragStart && index===0 && <div style={{position:'absolute', width:'100%', top: 0 ,zIndex:1, border:this.state.highlightIndex===-1?'1px solid red':'none'}}>
                    <DropTarget
                      targetKey="foo"
                      onHit={(e)=>this.changeList(-1)}
                      onDragEnter={(e)=>this.canDrop(-1) && this.setState({highlightIndex: -1})}
                      onDragLeave={(e)=>this.setState({highlightIndex: null})}
                    >
                      <div style={{position:'absolute', top:'-7px', width:'100%', height:'14px'}}></div>
                    </DropTarget>
                  </div> }
          <DragDropContainer
            targetKey="foo"
            dragData={{item}}
            onDragStart={(e)=>this.setState({dragStart: true, dragIndex: index})}
            onDragEnd={this.stopDragging}
          >
            <div style={{width:'100%',height:'25px',border:'1px solid green'}}>{item}</div>
          </DragDropContainer>
          {/* область для дропа AFTER */}
          {this.state.dragStart && <div style={{position:'absolute', width:'100%', bottom: 0 ,zIndex:1, border:this.state.highlightIndex===index?'1px solid red':'none'}}>
                    <DropTarget
                      targetKey="foo"
                      onHit={(e)=>this.changeList(index)}
                      onDragEnter={(e)=>this.canDrop(index) && this.setState({highlightIndex: index})}
                      onDragLeave={(e)=>this.setState({highlightIndex: null})}
                    >
                      <div style={{position:'absolute', top:'-7px', width:'100%', height:'14px'}}></div>
                    </DropTarget>
                  </div> }
        </div>
      );
    });

    return <div style={{width:'250px'}}>
      {result}
    </div>;
  }

  render() {
    const {list} = this.props;
    return (
      <div>
        {this.renderItem(list)}

        {/* <DragDropContainer
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
        </DropTarget> */}
      </div>
    );
  }
}