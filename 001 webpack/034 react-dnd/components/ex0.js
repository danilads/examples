import React, { memo } from 'react'
import ReactDOM from 'react-dom'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { useDrop, useDrag, DndProvider } from 'react-dnd'

// !!! touch support (ннужно перезагрузить страницу)
const isTouchDevice = !!('ontouchstart' in window || navigator.maxTouchPoints);
const dndBackend = isTouchDevice ? TouchBackend : HTML5Backend;

export default function Ex0() {
  return (
    <div>
        <h2>Работает тач (но нужно перезагрузить страницу) - базовый макет</h2>
        <DndProvider backend={dndBackend} options={{ enableMouseEvents: true }}>
          <Container />
        </DndProvider>

    </div>
  )
 }

 const Dustbin = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => {
      return { name: 'Dustbin' }
      },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }
    },
  })
 const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
   backgroundColor = 'darkgreen'
  } else if (canDrop) {
   backgroundColor = 'darkkhaki'
  }
  return (
   <div ref={drop} style={{
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    backgroundColor
   }}>
    {isActive ? 'Release to drop' : 'Drag a box here'}
   </div>
  )
 }
 const Box = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
   item: { name, type: ItemTypes.BOX },
   end: (item, monitor) => {
    const dropResult = monitor.getDropResult()
    if (item && dropResult) {
     alert(`You dropped ${item.name} into ${dropResult.name}!`)
    }
   },
   collect: (monitor) => ({
    isDragging: monitor.isDragging(),
   }),
  })
  const opacity = isDragging ? 0.4 : 1
  return (
   <div ref={drag} style={{
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
    opacity
   }}>
    {name}
   </div>
  )
 }
 
 export const Container = memo(function Container() {
  return (
   <div>
    <div style={{ overflow: 'hidden', clear: 'both' }}>
     <Dustbin />
    </div>
    <div style={{ overflow: 'hidden', clear: 'both' }}>
     <Box name="Glass" />
     <Box name="Banana" />
     <Box name="Paper" />
    </div>
   </div>
  )
 })
 
const ItemTypes = {
  BOX: 'box',
}