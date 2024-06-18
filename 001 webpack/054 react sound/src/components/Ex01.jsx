import React, { useState } from 'react';
import audioFile from "../sound/loop.wav"

export const Ex01 = () => {

	var audio = new Audio(audioFile);
	audio.loop = true;

	React.useEffect(() => {
		// убрать звук при закрытии компонента
		return () => {
			
			audio.pause();
		}
	}, []);

	return (
		<div>
			<button onClick={() => audio.play()}>click</button>
			<button>start loop</button>
			<button>stop loop</button>
		</div>
	)

}
