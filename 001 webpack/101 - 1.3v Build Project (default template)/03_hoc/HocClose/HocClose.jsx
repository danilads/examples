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
      const { acModalClosed } = this.props;
      console.log('все модалки закрыты');
      // this.props.acModalClosed();
      acModalClosed();
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

