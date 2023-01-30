import React, { useState, useCallback } from 'react';
import { useBetween } from 'use-between';

// BETWEEN HOOK
const useCounter = () => {
  const [count, setCount] = useState(0);
  const inc = useCallback(() => setCount(c => c + 1), []);
  const dec = useCallback(() => setCount(c => c - 1), []);
  return {
    count,
    inc,
    dec
  };
};

// BETWEEN HOOK
const useSharedCounter = () => useBetween(useCounter);

// COMPONENTS
const Count = () => {
	const { count } = useSharedCounter();
	return <p>{count}</p>;
};
  
const Buttons = () => {
  const { inc, dec } = useSharedCounter();
  return (
    <>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
    </>
  );
};

export const Ex00 = () => {
	return (
		<div>
			<Count />
      <Buttons />
		</div>
	)

}
