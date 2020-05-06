import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

function Column ({...props}) {

	console.log('--props',props);
	return (
				<Droppable droppableId={props.column.id}>
					{(provided)=>{
						<div
              {...provided.droppableProps}
              ref={provided.innerRef}
						>
							{props.taskArr.map((it,ind)=>{
								console.log('--it',it);
								return <Draggable style={{border:'1px solid red'}} key={it.id} draggableId={it.id} index={ind}>
									{(provided, snapshot) => (
                    <div
											ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {it.content}
                    </div>
                  )}
									</Draggable>
							})}
							{provided.placeholder}
						</div>
					}}
        </Droppable>
      );
}

class Ex0 extends React.Component {
	state={
		tasks: {
			task1: {id:'t1', content: 'hello1'},
			task2: {id:'t2', content: 'hello2'},
			task3: {id:'t3', content: 'hello3'},
			task4: {id:'t4', content: 'hello4'},
		},
		columns: {
			col1: {id:'c1', title: 'col 1', taskIds:['task1','task2','task3','task4']},
		},
		columnOrder: ['col1']
	}
	
	onDragEnd=()=>{
		console.log('drag end')
	};

	render() {
    let {tasks, columns, columnOrder} = this.state;

    
    if( false ){
      let arr = [{id:'t1', content: 'hello1'},{id:'t2', content: 'hello2'},{id:'t3', content: 'hello13'}];
      return(
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {arr.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      );
    }
		return (
			<DragDropContext
				// onDragStart={()=>console.log('drag start')}
				// onDragUpdate={()=>console.log('drag update')}
				onDragEnd={this.onDragEnd}
			>
				{columnOrder.map((colId, ind)=>{
					const column = columns[colId];
					const taskArr = column.taskIds.map(taskId=> tasks[taskId]);

          //return <Column key={column.id} column={column} taskArr={taskArr} />
          console.log('--taskArr',taskArr);

          return <Droppable key={column.id} droppableId={column.id} index={ind}>
            {(provided)=>(
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {taskArr.map((item, index)=>{
              
                  return <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
				})}
			</DragDropContext>);

	}

}


export default Ex0;