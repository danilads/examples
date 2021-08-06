import React from 'react';

import './GridStyles.css';

import ResponsiveReactGridLayout from "./ResponsiveReactGridLayout";
import WidthProvideRGL from "./WidthProvider";
// import { WidthProvider, Responsive } from "react-grid-layout";

const Responsive = WidthProvideRGL(ResponsiveReactGridLayout);

class Ex05 extends React.PureComponent {
    state = {
        layouts: {lg: [
            {i: 'a', x: 0, y: 0, w: 1, h: 2},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, isResizable: false},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ]}
    };

    onLayoutChange = (layout, layouts) => {
        console.log('--+ onLayoutChange')
        // isResizable СТАВИМ ЗДЕСЬ 
        const result = layouts.lg.map(it => ({...it, isDraggable: false, isResizable: true}));
        this.setState({layouts: {lg: result}});
    };

    onDrop = (layout, layoutItem, _event) => {
        console.log('--+ drop')
    };

	render() {
        const {layouts} = this.state;
        console.log('--+ layouts', layouts)
        // TODO
        // 01 вынести стили
        // 02 вынести компонент
        // 03 настроить возможность контроля ширины высоты дроп элемента
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
                    cols={{lg: 6, md: 6, sm: 6, xs: 6, xxs: 6}}
                    layouts={layouts}
                    onLayoutChange={this.onLayoutChange}
                    onDrop={this.onDrop}
             
                    compactType={null}
                    preventCollision={false}
                    isDroppable={true}
                >
                    <div className="item" key="a" draggable={false}>
                       <div
                            className="droppable-element"
                            draggable={true}
                            unselectable="on"
                            onDragStart={e => console.log('--+ DRAG START', e)}
                        >a</div>
                    </div>
                    <div className="item" key="b" draggable={false}>
                       <div className="droppable-element" draggable={true} unselectable="on">b</div>
                    </div>
                    <div className="item" key="c" draggable={false}>
                      <div className="droppable-element" draggable={true} unselectable="on">c</div>
                    </div>
                </Responsive>
                <br />
                <br />
                <Responsive
                    className="wrap"
                    rowHeight={30}

                    
                    cols={{lg: 6, md: 6, sm: 6, xs: 6, xxs: 6}}
                    layouts={{lg: [
                        {i: 'a', x: 0, y: 0, w: 1, h: 2},
                        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
                        {i: 'c', x: 4, y: 0, w: 1, h: 2}
                    ]}}
                    onLayoutChange={this.onLayoutChange}
                    onDrop={this.onDrop}
                    


                    compactType={null}
                    preventCollision={false}
                    isDroppable={true}

                >
                    <div className="item" key="a">a</div>
                    <div className="item" key="b">b</div>
                    <div className="item" key="c">c</div>
                </Responsive>
            </div>
		  </>
		)
	  }
}

export default Ex05;
