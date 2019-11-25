import React from 'react';
import { NavLink } from 'react-router-dom';
import { HocClose } from '../../02_components/HocClose/HocClose';
import ward from '../../04_images/images/ward.gif';
import myFile from '../../05_files/myFile.pdf';
import './PageAbout.scss';
import BlockAboutContent from '../../02_components/BlockAboutContent/BlockAboutContent';

class PageAbout extends React.PureComponent {
  state = {

  }

  render() {
    return (
      <div className={'PageAbout'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'image col-12'}>
              <div><img src={ward}/></div>
            </div>
            <div className={'title col-12'}><div>About</div></div>
            <div className={'col-12'}><hr/></div>
            <a href={myFile} download>скачать pdf</a>
            <NavLink className={'btnLevel1'} to={'/some'} activeClassName={'SActivated'}>some</NavLink>
          </div>
        </div>
        <BlockAboutContent/>
      </div>
    );
  }
}

export default HocClose(PageAbout);
