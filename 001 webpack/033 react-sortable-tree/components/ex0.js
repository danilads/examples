import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {TouchBackend} from 'react-dnd-touch-backend';
import { SortableTreeWithoutDndContext as SortableTree } from 'react-sortable-tree';

// !!! нужно добавить стили библиотеки
import './style.css';

const isTouchDevice = !!('ontouchstart' in window || navigator.maxTouchPoints);
const dndBackend = isTouchDevice ? TouchBackend : HTML5Backend;

class Ex0 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: 'Chicken', expanded: true, children: [{ title: 'Egg' }] },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Работает тач (но нужно перезагрузить страницу) - базовый макет</h2>
        <DndProvider backend={dndBackend}>
          <div>
            <span>
              This is {!isTouchDevice && 'not '}a touch-supporting browser
            </span>

            <div style={{ height: 300 }}>
              <SortableTree
                rowHeight={100} // !!! Высота блока
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

export default Ex0;