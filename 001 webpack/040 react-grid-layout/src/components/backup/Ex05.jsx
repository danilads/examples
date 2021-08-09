import React from 'react';

import './GridStyles.css';

import ResponsiveReactGridLayout from "./ResponsiveReactGridLayout";
import WidthProvideRGL from "./WidthProvider";
// import { WidthProvider, Responsive } from "react-grid-layout";

const Responsive = WidthProvideRGL(ResponsiveReactGridLayout);

class Ex05 extends React.PureComponent {
    state = {
        dragData: {id: null, group: null, w: null, h: null},
        layout1: [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, isDraggable: false, isResizable: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, isDraggable: false, isResizable: true},
            {i: 'c', x: 4, y: 0, w: 1, h: 2, isDraggable: false, isResizable: true}
        ],
        layout2: [
            {i: 'd', x: 0, y: 0, w: 1, h: 2, isDraggable: false, isResizable: true},
            {i: 'e', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, isDraggable: false, isResizable: true},
            {i: 'f', x: 4, y: 0, w: 1, h: 2, isDraggable: false, isResizable: true}
        ]

    };

    onLayoutChange = (layout, layouts) => {
        // console.log('--+ onLayoutChange', layout);
        // // isResizable СТАВИМ ЗДЕСЬ 
    };

    // drop общий
    onDrop = (layout, layoutItem, _event, layoutType) => {
        console.log('--+ drop layout', layout);
        console.log('--+ drop layoutItem', layoutItem);
        console.log('--+ drop id', this.state.dragData);
        console.log('--+ drop _event', _event);
        console.log('--+ drop layoutType', layoutType);

        // const indexDropItem
        if (layout.indexOf(it => it))
        this.setState({layout: layout.map(it => ({...it, isDraggable: false, isResizable: true}))});
    };

	render() {
        const {dragData, layout1, layout2} = this.state;

		return (
			<>
			<h6>Ex05 выносим в отдельный компонент </h6>

			<div>
                <div
                    className="droppable-element"
                    draggable={true}
                    unselectable="on"
                    // this is a hack for firefox
                    // Firefox requires some kind of initialization
                    // which we can do by adding this attribute
                    // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
                    
                >
                    Droppable Element (Drag me!)
                </div>
                <Responsive
                    className="wrap"
                    rowHeight={30}

                    droppingItem={dragData?.id ? {i: 'dropElement', w: dragData.w, h: dragData.h} : null}
                    cols={{lg: 6, md: 6, sm: 6, xs: 6, xxs: 6}}
                    layouts={{lg: layout1, md: layout1, sm: layout1, xs: layout1, xxs: layout1}}
                    onDrop={(e1,e2,e3) => this.onDrop(e1,e2,e3,'layout1')}

                    compactType={null}
                    preventCollision={false}
                    isDroppable={true}
                > 
                    {layout1.map(it => {
                        return  <div className="item" key={it.i} draggable={false}>
                        <div
                            className="droppable-element"
                            draggable={true}
                            unselectable="on"
                            onDragStart={() => this.setState({dragData: {id: it.i, group: 'layout1', w: it.w, h: it.h}})}
                        >{it.i}</div>
                     </div>
                    })}
                </Responsive>
                <br />
                <br />
                <Responsive
                    className="wrap"
                    rowHeight={30}

                    droppingItem={dragData?.id ? {i: 'dropElement', w: dragData.w, h: dragData.h} : null}
                    cols={{lg: 6, md: 6, sm: 6, xs: 6, xxs: 6}}
                    layouts={{lg: layout2, md: layout2, sm: layout2, xs: layout2, xxs: layout2}}
                    onDrop={(e1,e2,e3) => this.onDrop(e1,e2,e3,'layout2')}
                    
                    compactType={null}
                    preventCollision={false}
                    isDroppable={true}
                > 
                    {layout2.map(it => {
                        return  <div className="item" key={it.i} draggable={false}>
                        <div
                            className="droppable-element"
                            draggable={true}
                            unselectable="on"
                            onDragStart={() => this.setState({dragData: {id: it.i, group: 'layout1', w: it.w, h: it.h}})}
                        >{it.i}</div>
                     </div>
                    })}
                </Responsive>
            </div>
		  </>
		)
	  }
}

export default Ex05;
