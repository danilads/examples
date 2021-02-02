import React  from 'react';
import VirtualList from 'react-tiny-virtual-list'; 

import './Main.scss';
class Main extends React.PureComponent {

  	render() {
			const data = [...Array(10000)];
			return (
				<div className={"Main"}>
					hello
					<VirtualList
						width={300}
						height={300}
						itemCount={data.length}
						itemSize={30}
						style={{border: '1px solid'}}
						renderItem={({ index, style }) => {
							return <div key={index} style={style}>
											Row: #{index}
										</div>
							}
						}
					/>
				</div>
			);

  	}

}



export default Main;
