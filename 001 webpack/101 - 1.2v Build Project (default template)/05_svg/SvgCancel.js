import React, {PureComponent} from 'react';

export default class SvgCancel extends PureComponent {

    static defaultProps = {
		className:			"",
        width:              '30px',
        height:             '30px',
        strokeWidth:        2,
        // fillColor:          '#000',
        // fillColorInactive:  '#ff9700',
        // strokeColor:        '#000',
        viewBox:            '0 0 475.2 475.2',
		stroke: 'black',
		transform : "rotate(270)",
    };

    render() {
        let {className, width, height, strokeWidth, viewBox, stroke, transform} = this.props;
        return (
            <svg 
                className={className}
                width={width}
                height={height}
                strokeWidth={strokeWidth}
                viewBox={viewBox}
                stroke={stroke}
                transform={transform}
            >
                <path d="M405.6 69.6C360.7 24.7 301.1 0 237.6 0s-123.1 24.7-168 69.6S0 174.1 0 237.6s24.7 123.1 69.6 168 104.5 69.6 168 69.6 123.1-24.7 168-69.6 69.6-104.5 69.6-168-24.7-123.1-69.6-168zm-19.1 316.9c-39.8 39.8-92.7 61.7-148.9 61.7s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7 0-297.8C128.5 48.9 181.4 27 237.6 27s109.1 21.9 148.9 61.7c82.1 82.1 82.1 215.7 0 297.8z"/><path d="M342.3 132.9c-5.3-5.3-13.8-5.3-19.1 0l-85.6 85.6-85.6-85.6c-5.3-5.3-13.8-5.3-19.1 0-5.3 5.3-5.3 13.8 0 19.1l85.6 85.6-85.6 85.6c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.6-85.6 85.6 85.6c2.6 2.6 6.1 4 9.5 4 3.5 0 6.9-1.3 9.5-4 5.3-5.3 5.3-13.8 0-19.1l-85.4-85.6 85.6-85.6c5.3-5.3 5.3-13.8 0-19.1z"/>
            </svg>
        )
    }
}
