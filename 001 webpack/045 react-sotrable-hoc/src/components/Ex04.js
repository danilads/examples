import React, {useEffect, useMemo, useState, useCallback, useRef} from 'react';
import {sortableContainer, sortableElement, sortableHandle} from 'react-sortable-hoc';
import {InfiniteLoader, List} from 'react-virtualized';
import { useResizeDetector } from 'react-resize-detector';
import './Main.scss';

const cardHeight = 40;

const DragHandle = sortableHandle(() => <span>::</span>);

const SortableItem = sortableElement((props) => {
  return <Card {...props} />
});

const Card = ({title, style, isHeader}) => {
  return <div className={`item ${isHeader && 'header'}`} style={{...style, height: `${cardHeight}px`}}>
      {!isHeader && <DragHandle />}
      <span>{title}</span>
    </div>
};

const VirtualList = ({loadData, items, getRef}) => {
  const { width, height, ref } = useResizeDetector();

  const renderRow = ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style
  }) => {
    const {title, isHeader} = items[index];
    // This item needed only for first item
    if (index === 0) {
      return <Card style={style} key={key} index={index} title={title} isHeader={isHeader} />
    }
    return <SortableItem style={style} key={key} index={index} title={title} isHeader={isHeader} />;
  };

  const registerRefs = useCallback(
    (refs) =>
      ref => {
        refs.forEach(registerRef => {
          if (registerRef instanceof Function) {
            registerRef(ref);
          } else if (registerRef && 'current' in registerRef) {
            registerRef.current = ref;
          }
        });
      },
    []
  );

  return (
    <>
      <InfiniteLoader
        isRowLoaded={({ index }) => {
          // if reach last element
          return index !== items.length - 1;
        }}
        loadMoreRows={loadData}
        rowCount={items.length}
      >
        {({ onRowsRendered, registerChild }) => (
          <List
            onRowsRendered={onRowsRendered}
            ref={registerRefs([registerChild, getRef])}
            rowCount={items.length}
            rowHeight={cardHeight}
            rowRenderer={renderRow}
            width={width || 0}
            height={300}
          />
        )}
      </InfiniteLoader>
      <div ref={ref} />
    </>
  );
}

const SortableVirtualList = sortableContainer(VirtualList);

export const Ex04 = () => {
  
  const [items, setItems] = useState([]) // {id: / title: / isHeader: / groupBy:}
  console.log('--+ items', items);

  useEffect(() => {
    loadData(0);
  }, []);

  const loadData = async (ms) => {
    setTimeout(() => {
      const result = [...items];
      for(let i = 0; i < 31; i++ ) {
        const cnt = i + items.length;
        // every 15 items - new group
        result.push({title: `Item ${cnt}`, id: cnt, groupBy: `GROUP ${Math.floor(cnt / 15)}`})
      }
      setItems(result);

    }, typeof ms === 'number' ? ms : 2000);
  };

  const List = useRef(null);

  const onSortEnd = ({oldIndex, newIndex}) => {
    // HARDFIX
    if (oldIndex === newIndex) {
      return;
    }

    // (Need to change group after dropping)
    // const result = [...items];
    // const item = result.splice(oldIndex, 1);
    // result.splice(newIndex, 0, item[0]);
    // setItems(result);

    // We need to inform React Virtualized that the items have changed heights
    // This can either be done by imperatively calling the recomputeRowHeights and
    // forceUpdate instance methods on the `List` ref, or by passing an additional prop
    // to List that changes whenever the order changes to force it to re-render
    List.current.recomputeRowHeights();
    List.current.forceUpdate();
  };


  // add to data (header items - isHeader: true)
  const formDataWithHeaders = useMemo(() => {
    const result = [];
    const groupArr = [];
    if (items.length) {
      items.map(it => {
        // header added ?
        if (it && !groupArr.includes(it?.groupBy)) {
          groupArr.push(it.groupBy);
          result.push({title: it.groupBy, id: it.groupBy, isHeader: true});
        }
        result.push(it);
      });
    }
    return result;
  }, [items]);

  return (
    <div className='root'>
      <h1>EX 04 sortable + virualized + headers (fixed) + loading with scroll</h1>
      <button onClick={loadData}>loadmore (2 sec delay)</button>
      {items.length ? (
        <>
          <SortableVirtualList
            loadData={loadData}
            useDragHandle
            getRef={List}
            items={formDataWithHeaders}
            onSortEnd={onSortEnd}
          />
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
