import React, { FC, useState } from 'react';
import './TestPrimitive.scss';

interface Props {
	title?: string;
	disabled?: boolean;
}

export const TestPrimitive: FC<Props> = () => {
	return (
		<div className='TestPrimitive'>
			TestPrimitive
		</div>
	)

}
