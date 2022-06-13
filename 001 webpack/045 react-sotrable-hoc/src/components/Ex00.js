import React from 'react';
import './Main.scss';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(({item}) => {
  return <div className='item'>{item.title}</div>
});

const SortableList = SortableContainer(({items}) => {
  return (
    <div>
      {items.map((item, index) => (
        <SortableItem key={`item-${item.id}`} index={index} item={item} />
      ))}
    </div>
  );
});

export default class Ex00 extends React.PureComponent {
  state = {
    items: [
      {id: 1, title: 'Item 1'},
      {id: 2, title: 'Item 2'},
      {id: 3, title: 'Item 3'},
      {id: 4, title: 'Item 4'},
      {id: 5, title: 'Item 5'},
      {id: 6, title: 'Item 6'},
      {id: 7, title: 'Item 7'},
      {id: 8, title: 'Item 8'}
    ],
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => {
      const result = [...items];
      const item = result.splice(oldIndex, 1);
      result.splice(newIndex, 0, item[0]);
      return {items: result};
    });
  };

  render() {
    return (
      <div className='root'>
        <h1>EX 00 sortable basic</h1>
        <SortableList
          items={this.state.items}
          onSortEnd={this.onSortEnd}
        />
      </div>
    );
  }
}
