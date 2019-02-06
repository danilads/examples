import React, {PureComponent} from 'react';

import Dropdown from './Dropdown';
class MainPage extends PureComponent {

  	render() {
		return (
            <div style={{display:'flex'}}>
                <Dropdown title={'title'} dropContent={'content'}/>
                <Dropdown
                    title={<div>hello</div>}
                    dropContent={<div><br/>hello<hr/></div>}
                />
                <Dropdown
                    title={(e)=>{
                        console.log('e',e);
                        
                        return <div>{e.isOpened?'открыто':'закрыто'}</div>
                    }}
                    dropContent={<div>content</div>}
                />

            </div>
		);
  	}

}



export default MainPage;
