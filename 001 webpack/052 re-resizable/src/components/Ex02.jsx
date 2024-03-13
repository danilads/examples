import React, { useState } from 'react';
import { Resizable } from 're-resizable';

export const Ex02 = () => {
	const [width, setWidth] = useState(200);
	const [height, setHeight] = useState(200);
	console.log('--+ height', height);
	console.log('--+ width', width);
	return (
		<div>
			WORKING HERE
			<Resizable
				className='res01'
				size={{ width, height}}
				onResizeStop={(e, direction, ref, d) => {
					console.log('--+ stop');
					// setWidth(width + d.width);
					// setHeight(height + d.height);
				}}
				onResize={(e, direction, ref, d, c) => {
					console.log('--+ resize', d);
					console.log('--+ resize', direction);
					setWidth(width + d.width);
					setHeight(height + d.height);
				}}
				minWidth={100}
				minHeight={100}
				maxWidth={250}
				maxHeight={250}
			>
				Sample with default size
			</Resizable>
		</div>
	)

}
