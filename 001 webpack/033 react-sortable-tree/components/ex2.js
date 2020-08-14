import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {TouchBackend} from 'react-dnd-touch-backend';
import { SortableTreeWithoutDndContext as SortableTree } from 'react-sortable-tree';

// нужно добавить стили библиотеки
import './FullWidth.scss'; // !!! стили для все ширины
import './style.css';


const isTouchDevice = !!('ontouchstart' in window || navigator.maxTouchPoints);
const dndBackend = isTouchDevice ? TouchBackend : HTML5Backend;

class Ex2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: <div>hello<br/>hello</div>, expanded: true, children: [{ title: 'Egg' }] },
      ],
    };
  }

  render() {
    return (
      <div 
        // style={{width: '500px'}}
      >
        <h2>На всю ширину родителя</h2>
        <DndProvider backend={dndBackend}>
          <div>
            <span>
              This is {!isTouchDevice && 'not '}a touch-supporting browser
            </span>

            {/* для auto-height - этот параметр */}
            <div style={{ height: '100%' }}> 
              <SortableTree
                isVirtualized={false} // для auto-height - этот параметр
                treeData={this.state.treeData}
                onChange={treeData => this.setState({ treeData })}
                
              />
            </div>
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default Ex2;