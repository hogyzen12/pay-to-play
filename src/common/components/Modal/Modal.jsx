import React from 'react';
import { useSelector } from 'react-redux';
import {
  ModalSubmit,
  ModalSuccess,
  ModalConfirmation,
} from 'common/components';

const Modal = ({ connection }) => {
  const { modalType } = useSelector(state => state.modal);

  return (
    <>
      {modalType === 'submit' && <ModalSubmit connection={connection} />}
      {modalType === 'success' && <ModalSuccess />}
      {modalType === 'confirm' && <ModalConfirmation />}
    </>
  );
};

export default Modal;
