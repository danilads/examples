import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {TouchBackend} from 'react-dnd-touch-backend';
import { toggleExpandedForAll, SortableTreeWithoutDndContext as SortableTree } from 'react-sortable-tree';
import FileExplorerTheme1 from 'react-sortable-tree-theme-file-explorer';
import FileExplorerTheme2 from 'react-sortable-tree-theme-material-ui';

// нужно добавить стили библиотеки
// import './FullWidth.scss'; // !!! стили для все ширины
import './style.css';


const isTouchDevice = !!('ontouchstart' in window || navigator.maxTouchPoints);
const dndBackend = isTouchDevice ? TouchBackend : HTML5Backend;

class Ex3 extends Component {
  state = {
    treeData: [
      {
        id: 'a1',
        title: 'One',
        expanded: true,
        height: 100,
        children:[{id: 'a2', title: 'Two', height: 70}]
      }
      // {
      //   title: 'Tree',
      //   expanded: true,
      //   height: 100,
      // },
      // {
      //   title: 'Four',
      //   expanded: true,
      //   height: 100,
      // }
    ],
  }

  container = React.createRef();

  componentDidMount(){
    this.reCountHeight();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.treeData !== prevState.treeData){
      this.reCountHeight();
    }
  }

  // recount height oof items and their child by order
  reCountHeight = (e) => {
    console.log('--treeIndex',e);
 
    if(this.container.current){
     
      const ElemCollection = this.container.current.getElementsByClassName('rst__tree')[0].children;

      const arrHeight = [];
      const getChildHeight = (it) => {
        // TODO get list of all 
        it.forEach(it=>{
          arrHeight.push(it.height);
          if(Array.isArray(it.children) && it.children.length){
            getChildHeight(it.children);
          }

        })
      }
      
      console.log('--arrHeight', arrHeight);

      getChildHeight(this.state.treeData);
      



      //set height
      for(let i=0;ElemCollection.length>i;i++){
        ElemCollection[i].style.height = `${arrHeight[i]}px`;
      }

      console.log('----------');
    }
  }



  render() {
    // console.log('--toggleExpandedForAll',toggleExpandedForAll); func - открыть все
    console.log('--FileExplorerTheme1', FileExplorerTheme1);
    return (
      <div 
        // style={{width: '500px'}}
      >
        <h2>Разная высота</h2>
        <DndProvider backend={dndBackend}>
          <div>
            <span>
              This is {!isTouchDevice && 'not '}a touch-supporting browser
            </span>

            {/* для auto-height - этот параметр */}
            <div ref={this.container} style={{ height: '100%' }}> 
              <SortableTree
                // function recount
                generateNodeProps={(e)=>{
                  // ГЛИЧ
                  if(this.container.current){
                    this.container.current.getElementsByClassName('rst__tree')[0].children[e.treeIndex].style.height = `${e.node.height}px`;
                  }
                }}

                isVirtualized={false} // для auto-height - этот параметр
                treeData={this.state.treeData}
                onChange={treeData => {
                  this.setState({ treeData })
                }}
                theme={FileExplorerTheme2}

              />
            </div>
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default Ex3;