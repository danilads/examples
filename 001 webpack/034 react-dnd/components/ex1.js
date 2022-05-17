import React, { useCallback, useState, useRef } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrop, useDrag, DndProvider } from 'react-dnd'


export default function Ex1() {

  return (
    <div>
        <h2>dnd список</h2>
        <DndProvider backend={HTML5Backend} options={{ enableMouseEvents: true }}>
          <Container />
        </DndProvider>

    </div>
  )
 }

 const Container = () => {
  
    const [cards, setCards] = useState([
      {
        id: 101,
        cardData: 'Write a cool JS library',
      },
      {
        id: 102,
        cardData: 'Make it generic enough',
      },
      {
        id: 103,
        cardData: 'Write README',
      },
      {
        id: 104,
        cardData: 'Create some examples',
      },
      {
        id: 105,
        cardData: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      },
      {
        id: 106,
        cardData: '???',
      },
      {
        id: 107,
        cardData: 'PROFIT',
      },
    ])

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
    }, [])
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          cardData={card.cardData}
          moveCard={moveCard}
        />
      )
    }, [])
    return (
      <div style={{width: '100%'}}>{cards.map((card, i) => renderCard(card, i))}</div>
    )
  
}

// CARD
const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}

const UniqType = 'card';
const Card = ({ id, cardData, index, moveCard }) => {
  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    type: UniqType,
    accept: UniqType,
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
  })


  const [{ isDragging }, drag] = useDrag({
    type: UniqType,
    item: { name: 'wtf', type: UniqType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1

  drag(drop(ref))

  // TODO++
  // const [dragStart, setDragStart] = useState(false)
  // console.log('--+ isDragging', isDragging);

  return (
    <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      {cardData}
      <div onClick={console.log}>onclick</div>
    </div>
  )
}
