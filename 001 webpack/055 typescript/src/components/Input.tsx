import { FC, useState } from 'react';
import './Input.scss';

interface Props {
	title?: string;
	disabled?: boolean;
}

export const Input: FC<Props> = () => {
	return (
		<div className='text'>
			INPUT
		</div>
	)

}
