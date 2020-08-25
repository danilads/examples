import React from 'react';
import memoizeOne from 'memoize-one';
import {memoize as memoizeLodash} from 'lodash-es'; // best way to import
import mem from 'mem';
import memoizee from 'memoizee';
import memoize from 'fast-memoize';
import nanomemoize from 'nano-memoize';

function cnt(a,b,c,d){
	console.log('--works',a,b,c,d);
	return a+b	
}

class Main extends React.PureComponent {
	
	
  	render() {
			/////////////////
			//// 01 memoize-one
			//  -  (remember only last NO-CACHE)
			//  -  muliply args
			const memoizeOne1 = memoizeOne(cnt);
			
			// console.log('--memoize-one');
			// console.log(memoizeOne1(1, 2, 3, 4));
			// console.log(memoizeOne1(1, 2, 3, 4));
			// console.log(memoizeOne1(4, 3, 2, 1));
			// console.log(memoizeOne1(4, 3, 2, 1));
			// console.log(memoizeOne1(1, 2, 3, 4));

			/////////////////
			//// 02 memoize lodash
			//  -  (cache works)
			//  -  only 2 args
			const memoizeLodashWrap = memoizeLodash(cnt);

			// console.log('--memoize lodash');
			// console.log(memoizeLodashWrap(1, 2, 3, 4));
			// console.log(memoizeLodashWrap(1, 2, 3, 4));
			// console.log(memoizeLodashWrap(4, 3, 2, 1));
			// console.log(memoizeLodashWrap(4, 3, 2, 1));
			// console.log(memoizeLodashWrap(1, 2, 3, 4));

			/////////////////
			//// 03 mem
			//  -  (cache works)
			//  -  only 2 args
			
			const memLib = mem(cnt);
			
			// console.log('--mem');
			// console.log(memLib(1, 2, 3, 4));
			// console.log(memLib(1, 2, 3, 4));
			// console.log(memLib(4, 3, 2, 1));
			// console.log(memLib(4, 3, 2, 1));
			// console.log(memLib(1, 2, 3, 4));

			////////
			//// 04 memoizee
			//  -  (cache works)
			//  -  only 2 args
			
			const memoizeeLib = memoizee(cnt);
			
			// console.log('--memoizee');
			// console.log(memoizeeLib(1, 2, 3, 4));
			// console.log(memoizeeLib(1, 2, 3, 4));
			// console.log(memoizeeLib(4, 3, 2, 1));
			// console.log(memoizeeLib(4, 3, 2, 1));
			// console.log(memoizeeLib(1, 2, 3, 4));

			////////
			//// 05 fast-memoize
			//  -  (cache works)
			//  -  only 2 args
			
			const fastMemoize= memoize(cnt);

			// console.log('--fastMemoize');
			// console.log(fastMemoize(1, 2, 3, 4));
			// console.log(fastMemoize(1, 2, 3, 4));
			// console.log(fastMemoize(4, 3, 2, 1));
			// console.log(fastMemoize(4, 3, 2, 1));
			// console.log(fastMemoize(1, 2, 3, 4));

			////////
			//// 06 nanomemoize from 'nano-memoize
			//  -  (cache works)
			//  -  only 2 args
		
			const nanomemoizeLib = nanomemoize(cnt);

			// console.log('--nanomemoize');
			// console.log(nanomemoizeLib(1, 2, 3, 4));
			// console.log(nanomemoizeLib(1, 2, 3, 4));
			// console.log(nanomemoizeLib(4, 3, 2, 1));
			// console.log(nanomemoizeLib(4, 3, 2, 1));
			// console.log(nanomemoizeLib(1, 2, 3, 4));

		return (
			<div>
			    memoize libs
			</div>
		);

  	}

}


export default Main;