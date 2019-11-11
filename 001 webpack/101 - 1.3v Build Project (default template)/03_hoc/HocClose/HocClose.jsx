import React from 'react';
import { connect } from 'react-redux';
import {
  acModalOpen,
  acModalClosed
} from '../../redux/actions/acModal';


export const HocClose = (BaseComponent) => {
  class HocCloseClass extends React.Component {
    state = {

    };

    componentDidMount() {
      // TODO что делать с этим дерьмом?
      const { acModalClosed:acModClose } = this.props;
      console.log('все модалки закрыты');
      // this.props.acModalClosed();
      acModClose();
    }
    
    render() {
      return <React.Fragment>
          {/* Обернутый компонент */}
          <BaseComponent {...this.props}/>
      </React.Fragment>
    }
  }
  return connect((state) => ({

  }),
  {acModalOpen,acModalClosed})(HocCloseClass);
};

