import React from 'react';
import { NavLink } from 'react-router-dom';
import { HocClose } from '../../03_hoc/HocClose/HocClose';
import ward from '../../05_images/images/ward.gif';
import myFile from '../../06_files/myFile.pdf';
import './PageAbout.scss';
import BlockAboutContent from '../../02_components/BlockAboutContent/BlockAboutContent';

class PageAbout extends React.PureComponent {
  state = {

  }

  render() {
    return (
      <div className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="image col-12">
              <div><img alt="ward" src={ward} /></div>
            </div>
            <div className="title col-12"><div>About</div></div>
            <div className="col-12"><hr /></div>
            <a href={myFile} download>скачать pdf</a>
            <NavLink className="btnLevel1" to="/some" activeClassName="SActivated">some</NavLink>
          </div>
        </div>
        <BlockAboutContent />
      </div>
    );
  }
}

export default HocClose(PageAbout);
