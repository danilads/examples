import React, { useState } from 'react';



import { useNavigate } from "react-router-dom";
import { TestComponent } from "components/TestComponent";
import { TestPrimitive } from "primitives/TestPrimitive";
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {setData, setLoading, asyncFetchItems} from 'store/reducers/test'

export const TestPage = () => {
    const navigate = useNavigate()
    const items = useAppSelector(state => state.test.items);
    console.log('--+ items', items);
    return (
        <div>
            TESTING DEFAULT FUNCTIONALITY OF WEBPACK
            <TestPrimitive />
            <hr />
            <TestComponent />
            

            <hr />
            <h3>05 test react-router</h3>
            <button onClick={() => navigate('/test')}>navigate to test</button>

     
            <hr />
            <h3>06 use browser back / fowrard buttons (after navigate to /test)</h3>

        </div>
    )

}
