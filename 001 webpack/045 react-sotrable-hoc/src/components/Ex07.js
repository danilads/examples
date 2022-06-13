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

const Card = ({title, style, isHeader, onClick}) => {
  return <div onClick={onClick} className={`item${isHeader ? ' header' : ''}`} style={{...style, height: `${cardHeight}px`}}>
      {!isHeader && <DragHandle />}
      <span>{title}</span>
    </div>
};

const VirtualList = ({showPlaceholder, loadData, addRemoveCollpaseId, items, getRef}) => {
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
      return <>
        <div style={style} key={key} className='placeholder'>{`placeholder ${title}`}</div>
        <Card style={style} key={key} index={index} title={title} onClick={() => addRemoveCollpaseId(title)} isHeader={isHeader} />
      </>
    }
    return <>
        <div style={style} key={key} className='placeholder'>{`placeholder ${title}`}</div>
        <SortableItem style={style} key={key} index={index} title={title} isHeader={isHeader} onClick={() => isHeader && addRemoveCollpaseId(title)} />
      </>
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

export const Ex07 = () => {
  
  const [items, setItems] = useState([]); // {id: / title: / isHeader: / groupBy:}
  const [collapsedIds, setCollapsedIds] = useState([]);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  console.log('--+ items', items);

  useEffect(() => {
    loadDataByPart(0);
  }, []);

  const loadDataByPart = async (ms) => {
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

  const loadDataFull = () => {
    setTimeout(() => {
      const result = [];
      for(let i = 0; i < items.length; i++ ) {
        const cnt = items.length - i;
        // every 15 items - new group
        result.push({title: `Item ${cnt}`, id: cnt, groupBy: `GROUP ${Math.floor(i / 15)}`})
      }
      setItems(result);

    }, 500);
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
        // filter by it.groupBy
        if (!collapsedIds.includes(it.groupBy)) {
          result.push(it);
        }
      });
    }
    return result;
  }, [items, collapsedIds]);

  const addRemoveCollpaseId = id => {
    const ind = collapsedIds.indexOf(id);
    const prevItems = [...collapsedIds];
    if (ind === -1) {
      prevItems.push(id);
      setCollapsedIds(prevItems);
    } else {
      prevItems.splice(ind, 1);
      setCollapsedIds(prevItems);
    }
  };

  return (
    <div className='root'>
      <h1>EX 07 sortable</h1>
      <h1>PREV CASES: virualized 🥷 headers (fixed) 🥷 loading with scroll 🥷 collapse groups 🥷 sorting(reRequestLoaded) </h1>
      <h1>CURRENT CASE: placeholder</h1>
      <button onClick={loadDataByPart}>loadmore (2 sec delay)</button>
      <button onClick={loadDataFull}>FAKE sort (just rerequest full data and change id's and names)</button>
      {items.length ? (
        <>
          <SortableVirtualList
            showPlaceholder={showPlaceholder}
            onSortStart={() => setShowPlaceholder(true)}
            addRemoveCollpaseId={(id) => addRemoveCollpaseId(id)}
            loadData={loadDataByPart}
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
