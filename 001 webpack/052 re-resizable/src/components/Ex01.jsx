import React, { useState } from 'react';
import { Resizable } from 're-resizable';

export const Ex01 = () => {

	return (
		<div>
			WORKING HERE
			<Resizable
				className='res01'
				defaultSize={{
					width: 320,
					height: 200,
				}}
			>
				Sample with default size
			</Resizable>
		</div>
	)

}
