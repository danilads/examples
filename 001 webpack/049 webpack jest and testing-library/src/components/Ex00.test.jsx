import React from 'react';
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';


import {Ex00testFunc} from './Ex00'
import Ex00 from './Ex00';


// Simple "jest" test
test('test - Ex00testFunc', () => {
    expect(Ex00testFunc('hello')).toBe('hello');
    expect(Ex00testFunc('works?')).toBe('works?');
});

// Simple "testing-library" test
describe('test Ex00 component ui', () => {
  test('title', () => {
    render(
        <Ex00 />
    );

    expect(screen.getByText('Jest simple')).toBeInTheDocument();
  });
});
