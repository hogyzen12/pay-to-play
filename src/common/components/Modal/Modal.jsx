import React from 'react';
import { useSelector } from 'react-redux';
import {
  ModalSubmit,
  ModalSuccess,
  ModalConfirmation,
} from 'common/components';

const Modal = ({ modalProps }) => {
  const { modalType } = useSelector(state => state.modal);

  return (
    <>
      {modalType === 'submit' && <ModalSubmit {...modalProps} />}
      {modalType === 'success' && <ModalSuccess {...modalProps} />}
      {modalType === 'confirm' && <ModalConfirmation {...modalProps} />}
    </>
  );
};

export default Modal;
