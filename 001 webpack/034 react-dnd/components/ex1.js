import React, { useEffect, useCallback, useState, useRef } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrop, useDrag, DndProvider } from 'react-dnd'

export default function Ex1() {

  // PROPS - card styles
  const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem'
  };

  // PROPS - [array] should have uniqId
  const arr = [{id: 101, cardData: '1'},{id: 102, cardData: '2'},{id: 103, cardData: '3'},{id: 104, cardData: '4'},{id: 105, cardData: '5'},{id: 106, cardData: '6'}];
  
  // PROPS - render item
  const renderItem = (data) => {
    return <div style={style}>{data.cardData}</div>
  };

  // PROPS - uniq dnd id
  const uniqId = 'card';

  // PROPS - Drag start (return item)
  const [dragStart, setDragStart] = useState(null);

  // PROPS - Render drop zone 
  const renderDropzone = () => {
    return <div style={{height: '60px', background: '#fec'}}></div>
  };

  return (
    <div>
        <h2>dnd список</h2>
        <DndProvider backend={HTML5Backend} options={{ enableMouseEvents: true }}>
          <Container dataArray={arr} uniqId={uniqId} renderDropzone={renderDropzone} renderItem={renderItem} isDragging={setDragStart} />
        </DndProvider>

    </div>
  );
 }

 const Container = ({dataArray, renderItem, uniqId, isDragging, renderDropzone}) => {
    const [cards, setCards] = useState(dataArray);

    const moveCard = useCallback((dragIndex, hoverIndex) => {
      if (typeof dragIndex === 'number') {
        setCards((prevCards) => {
          const result = [...prevCards];

          // remove item
          const dragItem = result.splice(dragIndex, 1)[0];

          // insert item
          result.splice(hoverIndex, 0, dragItem);

          return result;
        })
      }
    }, []);
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          renderDropzone={renderDropzone}
          propIsDragging={isDragging}
          renderItem={renderItem}
          uniqId={uniqId}
          key={card.id}
          index={index}
          id={card.id}
          cardData={card}
          moveCard={moveCard}
        />
      )
    }, []);
    return (
      <div style={{width: '100%'}}>{cards.map((card, i) => renderCard(card, i))}</div>
    );
}

const Card = ({ id, cardData, index, moveCard, uniqId, renderItem, propIsDragging, renderDropzone }) => {
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    type: uniqId,
    accept: uniqId,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: uniqId,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  useEffect(() => {
    propIsDragging(isDragging ? cardData : null);
  }, [isDragging]);

  return (
    
    <div ref={ref} data-handler-id={handlerId}>
      {isDragging ? renderDropzone() : renderItem(cardData) }
    </div>
  )
}
