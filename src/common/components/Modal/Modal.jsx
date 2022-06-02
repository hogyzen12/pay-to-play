import React from 'react';
import { useSelector } from 'react-redux';
import { ModalSubmit, ModalSuccess } from 'common/components';

const Modal = ({ modalProps }) => {
  const { modalType } = useSelector(state => state.modal);

  return (
    <>
      {modalType === 'submit' && <ModalSubmit {...modalProps} />}
      {modalType === 'success' && <ModalSuccess {...modalProps} />}
    </>
  );
};

export default Modal;
