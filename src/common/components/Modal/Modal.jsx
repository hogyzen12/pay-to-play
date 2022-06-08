import React from 'react';
import { useModal } from 'common/hooks';
import {
  ModalSubmit,
  ModalSuccess,
  ModalConfirmation,
} from 'common/components';

const Modal = ({ handlePay }) => {
  const { modalType } = useModal();

  return (
    <>
      {modalType === 'submit' && <ModalSubmit handlePay={handlePay} />}
      {modalType === 'success' && <ModalSuccess />}
      {modalType === 'confirm' && <ModalConfirmation />}
    </>
  );
};

export default Modal;
