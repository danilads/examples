import React from 'react';
import './button.css';

export const Button = ({ title }) => {
  console.log('--+');
  return (
    <div className='button-root'>
      <div>{title}</div>
      <div>Button</div>
    </div>
  );
};
