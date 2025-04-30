import React, { FC, useState } from 'react';
import './TestComponent.scss';
const imgEx = require('assets/download.jpeg');
import { SVG_React_Logo } from 'svg/SVG_React_Logo';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {setData, setLoading, asyncFetchItems} from 'store/reducers/test';

interface Props {
	title?: string;
	disabled?: boolean;
}

export const TestComponent: FC<Props> = () => {
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(state => state.test.isLoading);
	return (
		<div className='TestComponent'>
			<h3>TestComponent</h3>

			<hr />
            <h3>00 redux here and redux DevTools in chrome</h3>
            <button onClick={() => dispatch(asyncFetchItems('id321'))}>async action</button>
            <button onClick={() => dispatch(setData({items: [0]}))}>set data</button>
            <button onClick={() => dispatch(setLoading({isLoading: !isLoading}))}>loading toggle</button>
            <div>{isLoading ? 'loading' : 'stop loading'}</div>

			<hr />
            <h3>01 media query resize screen to see borders colors</h3>
			<div className='media_border' >border color should change</div>
			<hr />
			<h3>00 font and css test</h3>
			<div className='font'>STRANGE FONT + background</div>

			<hr />
			<h3>02 image test</h3>
			<div><img className="GLOBAL_img" src={imgEx} /></div>

			<hr />
			<h3>03 download file</h3>
			<a href={imgEx} download>download</a>

			<hr />
			<h3>04 svg</h3>
			<div><SVG_React_Logo /></div>


		</div>
	)

}
