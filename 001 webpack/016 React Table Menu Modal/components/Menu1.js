import React,{Fragment} from 'react';

import Menu, {SubMenu, MenuItem, Divider} from 'rc-menu';
import 'rc-menu/assets/index.css';
import './Menu1.scss';

class Menu1 extends React.PureComponent {
    state={
      selected: ['']
    }
  	render() {
        let icon = <span>i</span>
        let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
        return <div>
          <Menu
            className={'Menu'}
            onSelect={(e)=>this.setState({selected:[e.key]})}
            selectedKeys={this.state.selected}
            mode="horizontal"

            // onSelect={handleSelect}
            // onClick={handleClick}
          >
            <SubMenu
              popupClassName={'Menu'}
              title='offset sub menu 2'
              key="4"
              popupOffset={[10, 15]}
            >
              <MenuItem itemIcon={icon} className={'Menu'} key="4-1"><span>inner inner</span></MenuItem>
              
              <SubMenu
                key="4-2"
                title={<span>sub menu 1</span>}
              >
                <SubMenu title={<span>sub 4-2-0</span>} key="4-2-0">
                  <MenuItem key="4-2-0-1"><span>inner inner</span></MenuItem>
                  <MenuItem key="4-2-0-2"><span>inner inner2</span></MenuItem>
                </SubMenu>
                <MenuItem key="4-2-1"><span>inn</span></MenuItem>
                <SubMenu title={<span>sub menu 4</span>} key="4-2-2">
                  <MenuItem key="4-2-2-1"><span>inner inner</span></MenuItem>
                  <MenuItem key="4-2-2-2"><span>inner inner2</span></MenuItem>
                </SubMenu>
                <SubMenu title={<span>sub menu 3</span>} key="4-2-3">
                  <MenuItem key="4-2-3-1"><span>inner inner</span></MenuItem>
                  <MenuItem key="4-2-3-2"><span>inner inner2</span></MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>

            <SubMenu
              title={
                <span>offset sub menu 2</span>
              }
              key="5"
              popupOffset={[10, 15]}
            >
              <MenuItem key="5-1"><span>inner inner</span></MenuItem>
              
              <SubMenu
                key="5-2"
                title={<span>sub menu 1</span>}
              >
                <SubMenu title={<span>sub 4-2-0</span>} key="5-2-0">
                  <MenuItem key="5-2-0-1"><span>inner inner</span></MenuItem>
                  <MenuItem key="5-2-0-2"><span>inner inner2</span></MenuItem>
                </SubMenu>
                <MenuItem key="5-2-1"><span>inn</span></MenuItem>
                <SubMenu title={<span>sub menu 4</span>} key="5-2-2">
                  <MenuItem key="5-2-2-1"><span>inner inner</span></MenuItem>
                  <MenuItem key="5-2-2-2"><span>inner inner2</span></MenuItem>
                </SubMenu>
                {/* если много конента добавляем данный стиль */}
                <SubMenu popupClassName={'scrollConent'} title={<span>sub menu 3</span>} key="5-2-3">
                  {arr.map(it=>{
                    return <MenuItem key={"5-2-3-"+it}><span>{"inner inner"+it}</span></MenuItem>
                  })}
                </SubMenu>
              </SubMenu>
            </SubMenu>
          </Menu>
		    </div>

  	}

}



export default Menu1;
