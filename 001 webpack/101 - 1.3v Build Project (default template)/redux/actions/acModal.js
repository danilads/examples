import {
  MODAL_OPEN,
  MODAL_CLOSED
} from '../constants';

export const acModalOpen = (e) => (dispatch /* getState */) => {
  document.body.style.overflow = 'hidden';
  dispatch({
    type: MODAL_OPEN,
    payload: e
  });
};

export const acModalClosed = () => (dispatch /* getState */) => {
  document.body.style.overflow = 'auto';
  dispatch({
    type: MODAL_CLOSED
  });
};
