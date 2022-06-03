import { useSelector } from 'react-redux';

const useModal = () => {
  const { isModalOpen, modalType } = useSelector(state => state.modal);

  return {
    isModalOpen,
    modalType,
  };
};

export default useModal;
