import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  acModalOpen,
  acModalClosed
} from '../../redux/actions/acModal';


export const HocClose = (BaseComponent) => {
  class HocCloseClass extends React.Component {
    static propTypes = {
      // redux functions
      acModalOpen: PropTypes.func,
      acModalClosed: PropTypes.func
    }

    state = {

    };

    componentDidMount() {
      // TODO что делать с этим дерьмом?
      const { acModalClosed } = this.props;
      console.log('все модалки закрыты');
      // this.props.acModalClosed();
      acModalClosed();
    }

    render() {
      return (
        <Fragment>
          {/* Обернутый компонент */}
          <BaseComponent {...this.props}/>
        </Fragment>
      );
    }
  }
  return connect((/* state */) => ({

  }),
  { acModalOpen, acModalClosed })(HocCloseClass);
};
