import React,{Fragment} from 'react';

import Menu, {SubMenu, MenuItem, Divider} from 'rc-menu';
import 'rc-menu/assets/index.css';
import './Menu1.scss';

class Menu1 extends React.PureComponent {

  	render() {
        let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
        return <div>
          <Menu
            mode="horizontal"
            // onSelect={handleSelect}
            defaultActiveFirst
            // onClick={handleClick}
          >
            <SubMenu
              title={
                <span className="submenu-title-wrapper">offset sub menu 2</span>
              }
              key="4"
              popupOffset={[10, 15]}
            >
              <MenuItem key="4-1">inner inner</MenuItem>
              <Divider/>
              <SubMenu
                key="4-2"
                title={<span className="submenu-title-wrapper">sub menu 1</span>}
              >
                <SubMenu title={<span className="submenu-title-wrapper">sub 4-2-0</span>} key="4-2-0">
                  <MenuItem key="4-2-0-1">inner inner</MenuItem>
                  <MenuItem key="4-2-0-2">inner inner2</MenuItem>
                </SubMenu>
                <MenuItem key="4-2-1">inn</MenuItem>
                <SubMenu title={<span className="submenu-title-wrapper">sub menu 4</span>} key="4-2-2">
                  <MenuItem key="4-2-2-1">inner inner</MenuItem>
                  <MenuItem key="4-2-2-2">inner inner2</MenuItem>
                </SubMenu>
                <SubMenu title={<span className="submenu-title-wrapper">sub menu 3</span>} key="4-2-3">
                  <MenuItem key="4-2-3-1">inner inner</MenuItem>
                  <MenuItem key="4-2-3-2">inner inner2</MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>

            <SubMenu
              title={
                <span className="submenu-title-wrapper">offset sub menu 2</span>
              }
              key="5"
              popupOffset={[10, 15]}
            >
              <MenuItem key="5-1">inner inner</MenuItem>
              <Divider/>
              <SubMenu
                key="5-2"
                title={<span className="submenu-title-wrapper">sub menu 1</span>}
              >
                <SubMenu title={<span className="submenu-title-wrapper">sub 4-2-0</span>} key="5-2-0">
                  <MenuItem key="5-2-0-1">inner inner</MenuItem>
                  <MenuItem key="5-2-0-2">inner inner2</MenuItem>
                </SubMenu>
                <MenuItem key="5-2-1">inn</MenuItem>
                <SubMenu title={<span className="submenu-title-wrapper">sub menu 4</span>} key="5-2-2">
                  <MenuItem key="5-2-2-1">inner inner</MenuItem>
                  <MenuItem key="5-2-2-2">inner inner2</MenuItem>
                </SubMenu>
                {/* если много конента добавляем данный стиль */}
                <SubMenu popupClassName={'scrollConent'} title={<span className="submenu-title-wrapper">sub menu 3</span>} key="5-2-3">
                  {arr.map(it=>{
                    return <MenuItem key={"5-2-3-"+it}>{"inner inner"+it}</MenuItem>
                  })}
                </SubMenu>
              </SubMenu>
            </SubMenu>
          </Menu>
		    </div>

  	}

}



export default Menu1;
