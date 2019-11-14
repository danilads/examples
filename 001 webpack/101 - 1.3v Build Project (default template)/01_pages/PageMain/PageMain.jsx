import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HocClose } from '../../03_hoc/HocClose/HocClose';
import Spiner from '../../04_primitives/Spiner/Spiner';
import logoAnim from '../../05_images/images/logoAnim.gif';
import { acHeroesLoading } from '../../redux/actions/acHeroes';
import { NetworkApi } from '../../network/NetworkApi';

import './PageMain.scss';

class PageMain extends React.PureComponent {
  static propTypes = {
    heroes: PropTypes.object,
    acHeroesLoading: PropTypes.func
  }

  componentDidMount() {
    this.request();
  }

  request = async () => {
    const response = await NetworkApi.exampleReturnRequest();
    console.log('---response', response);
  };

  renderSpiner = () => {
    const { heroes } = this.props;
    let result;

    if (!heroes.isLoaded && !heroes.loading) {
      result = 'данные еще не загужались';
    }
    if (heroes.loading) {
      result = <Spiner/>;
    }
    if (heroes.isLoaded) {
      result = 'данные загружены';
    }
    return result;
  };

  render() {
    const { heroes, acHeroesLoading } = this.props;
    console.log(heroes);
    return (
      <div className={'PageMain'}>
        <div className={'mainLogo'}>
          <div><img src={logoAnim}/></div>
        </div>
        <div className={'buttonsBlock'}>
          <div><a className={'btnLevel1'} href={'https://www.dota2.com'} target={'_blank'}>official site</a></div>
          <div role={'button'} tabIndex={'0'} className={'btnLevel1'} onClick={acHeroesLoading}>load redux</div>
          <div><NavLink className={'btnLevel1'} to={'/about'} activeClassName={'SActivated'}>about</NavLink></div>
        </div>
        <div className={'cont'}>{this.renderSpiner()}</div>
      </div>
    );
  }
}

// hoc обернутый в конекст
export default connect((state) => ({
  heroes: state.rdHeroes
}),
{ acHeroesLoading })(HocClose(PageMain));
