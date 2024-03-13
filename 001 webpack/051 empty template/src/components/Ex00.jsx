import React, { useState } from 'react';
import imgEx from '../assets/download.jpeg';
import { useNavigate } from "react-router-dom";

export const Ex00 = () => {
	const navigate = useNavigate()

	return (
		<div>
			TESTING DEFAULT FUNCTIONALITY OF WEBPACK
			<hr />
			<div className='font'>00 font test (STRANGE FONT)</div>

			<hr />
			<div>01 image test</div>
			<div><img className="img" src={imgEx} /></div>

			<hr />
			<div>02 download image test</div>
			<a href={imgEx} download>download</a>

			<hr />
			<div>03 test router</div>
			<button onClick={() => navigate('/test')}>go to test</button>

			<hr />
			<div>04 test browser back / fowrard buttons</div>

		</div>
	)

}
