import React, { FC, useState } from 'react';
import './Input.scss';
const imgEx = require('assets/download.jpeg');
const reactLogo = require('assets/download.jpeg');

interface Props {
	title?: string;
	disabled?: boolean;
}

export const Input: FC<Props> = () => {
	return (
		<div className='text'>
			INPUT

			<hr />

			
			<hr />
			<div className='font'>00 font and css test (STRANGE FONT + border)</div>

			<hr />
			<div>01 image test</div>
			<div><img className="img" src={imgEx} /></div>

			<hr />
			<div>02 download image test</div>
			<a href={imgEx} download>download</a>

			<hr />
			<div>04 svg</div>
			<div><img className="img" src={reactLogo} /></div>

			<hr />
			<div>05 test browser back / fowrard buttons (in test page)</div>
			
		</div>
	)

}
