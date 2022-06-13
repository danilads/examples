import React, {Component} from 'react';
import {sortableContainer, sortableElement, sortableHandle} from 'react-sortable-hoc';
import {List} from 'react-virtualized';
import './Main.scss';

const DragHandle = sortableHandle(() => <span>::</span>);

const SortableItem = sortableElement(({title, style, isHeader}) => {
  return <div className={`item ${isHeader && 'header'}`} style={style}>
      {!isHeader && <DragHandle />}
      <span>{title}</span>
    </div>
});

class VirtualList extends Component {
  renderRow = ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style
  }) => {
    const {items} = this.props;
    const {title, isHeader} = items[index];
    
    return <SortableItem style={style} key={key} index={index} title={title} isHeader={isHeader} />;
  };

  render() {
    const {items, getRef} = this.props;

    return (
      <List
        ref={getRef}
        rowHeight={40}
        rowRenderer={this.renderRow}
        rowCount={items.length}
        width={400}
        height={300}
      />
    );
  }
}

const SortableVirtualList = sortableContainer(VirtualList);

export default class Ex02 extends Component {
  constructor(props){
    super(props);
    //перезапишет state
    this.state = {
      items: [101,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,102,20,21,22,23,24,25,26,27,28,29,103,30,31,32,33,34,35,36,37,38,39].map(it => {
        if (it > 100) {
          return {title: `Item${it}`, id: it, isHeader: true};
        }
        return {title: `Item${it}`, id: it};
      })
    }
  }

  registerListRef = (listInstance) => {
    this.List = listInstance;
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    // HARDFIX
    if (oldIndex === newIndex) {
      return;
    }

    this.setState(({items}) => {
      const result = [...items];
      const item = result.splice(oldIndex, 1);
      result.splice(newIndex, 0, item[0]);
      return {items: result};
    });

    // We need to inform React Virtualized that the items have changed heights
    // This can either be done by imperatively calling the recomputeRowHeights and
    // forceUpdate instance methods on the `List` ref, or by passing an additional prop
    // to List that changes whenever the order changes to force it to re-render
    this.List.recomputeRowHeights();
    this.List.forceUpdate();
  };

  render() {
    const {items} = this.state;
    console.log('--+ items', items);
    return (
      <div className='root'>
        <h1>EX 02 sortable + virualized + headers (problem - you can drop on first position (before header))</h1>
        <SortableVirtualList
          useDragHandle
          getRef={this.registerListRef}
          items={items}
          onSortEnd={this.onSortEnd}
        />
      </div>
    );
  }
}
