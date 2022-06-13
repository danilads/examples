import React, {Component} from 'react';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import {List} from 'react-virtualized';
import './Main.scss';

const SortableItem = sortableElement(({title, style}) => {
  return <div className='item' style={style}>{title}</div>
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
    const {title, id} = items[index];

    return <SortableItem style={style} key={key} index={index} title={title} />;
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

export default class Ex01 extends Component {
  constructor(props){
    super(props);
    //перезапишет state
    this.state = {
      items: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map(it => ({title: `Item${it}`, id: it}))
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

    return (
      <div className='root'>
        <h1>EX 01 sortable + virualized</h1>
        <SortableVirtualList
          getRef={this.registerListRef}
          items={items}
          onSortEnd={this.onSortEnd}
        />
      </div>
    );
  }
}
