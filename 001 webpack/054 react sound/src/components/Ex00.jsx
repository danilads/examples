import React, { useState } from 'react';
import imgEx from '../assets/download.jpeg';
import reactLogo from '../assets/react_logo.svg';
import { useNavigate } from "react-router-dom";

export const Ex00 = () => {
	const navigate = useNavigate()

	return (
		<div>
			TESTING DEFAULT FUNCTIONALITY OF WEBPACK
			<hr />
			<div className='font'>00 font and css test (STRANGE FONT + border)</div>

			<hr />
			<div>01 image test</div>
			<div><img className="img" src={imgEx} /></div>

			<hr />
			<div>02 download image test</div>
			<a href={imgEx} download>download</a>

			<hr />
			<div>03 test react-router</div>
			<button onClick={() => navigate('/test')}>go to test</button>

			<hr />
			<div>04 svg</div>
			<div><img className="img" src={reactLogo} /></div>

			<hr />
			<div>05 test browser back / fowrard buttons (in test page)</div>

		</div>
	)

}
