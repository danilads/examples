import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


class Ex0 extends React.Component {
  state={
    list1:['it1','it2'],
    list2:['it3'],
    hover: ''
  }
  // type (enter/leave)
  onStyleChange=(type, e, stateName)=>{
    // и если это не контейнер собственик
    if(type==='enter' && e.dragData.stateName!==stateName){
      this.setState({hover: stateName});
    }
    else if(type==='leave'){
      this.setState({hover: ''});
    }
  }

  // recount
  onDrop=(e, state, stateName)=>{
    // информация - где находится item (e.dragData.item, e.dragData.state, e.dragData.stateName)
    console.log('--e.dragData', e.dragData);

    // информация - куда кидать item
    console.log('--state', state);
    console.log('--stateName', stateName);


    // в любом случаи снимаем hover с dropContainer
    this.setState({hover: ''});

    if(e.dragData.stateName !== stateName){
      let arrRemove = [...e.dragData.state];
      let arrPut = [...state];
      
      // find index
      let indRemove = 0;
      arrRemove.forEach((it,ind)=>{
        if(it===e.dragData.item){
          indRemove=ind;
        }
      })
      arrRemove.splice(indRemove,1);
      arrPut.push(e.dragData.item);
  
      this.setState({[e.dragData.stateName]:arrRemove,[stateName]:arrPut});
    }
  }

  renderDrag=(item, state, stateName)=>{
    return <DragDropContainer
      key={item}
      targetKey="foo"
      // информация - где находится item
      dragData={{item, state, stateName}}
    >
      <div style={{width: '25px', height: '25px', border: '1px solid orange'}}>{item}</div>
    </DragDropContainer>
  }

  // state - this.state листа которого рендерим
  // stateName - this.state Имя листа которого рендерим
  renderDrop=(state, stateName, dropName)=>{
    return <DropTarget
      targetKey="foo"
      dropData={{data: 'DropContainer data'}}

      //on drop (информация - куда кидать item (state, stateName))
      onHit={e=>this.onDrop(e, state, stateName)}

      //для стилей
      onDragEnter={(e)=>this.onStyleChange('enter', e, stateName)}
      onDragLeave={(e)=>this.onStyleChange('leave', e, stateName)}
    >
      <div style={{height: '250px', border: `1px solid ${stateName === this.state.hover?'red':'blue'}`}}>
        <div>Container 1</div>
        <div>
          {state.map((item)=>this.renderDrag(item, state, stateName))}
        </div>
      </div>
  </DropTarget>
  }

  render() {
    const {list1, list2} = this.state;
    return (
      <div>
        <h6>Ex2 из одного в другой + стили</h6>
        
        <div>{this.renderDrop(list1, 'list1')}</div>

        <div>{this.renderDrop(list2, 'list2')}</div>
        
      </div>
    );
  }
}

export default Ex0;