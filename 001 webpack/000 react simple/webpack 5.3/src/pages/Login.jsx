import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import imgEx from '../assets/download.jpeg';
import reactLogo from '../assets/react_logo.svg';
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import {setData, setLoading, asyncFetchItems} from '../redux/reducers/items'

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
    const isLoading = useSelector(state => state.items.isLoading);
    console.log('--+ items', items);
    return (
        <div>
            TESTING DEFAULT FUNCTIONALITY OF WEBPACK
            <hr />
            <div className='font'>component adaptive</div>
            <Input />

            <hr />
            <div className='font'>redux</div>
            <button onClick={() => dispatch(asyncFetchItems('id321'))}>async action</button>
            <button onClick={() => dispatch(setData({items: [0]}))}>set data</button>
            <button onClick={() => dispatch(setLoading({isLoading: !isLoading}))}>loading toggle</button>
            <div>{isLoading ? 'loading' : 'stop loading'}</div>

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
