import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  modalType: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpened: (state, action) => ({
      isModalOpen: true,
      modalType: action.payload,
    }),
    modalClosed: state => initialState,
  },
});

export const { modalOpened, modalClosed } = modalSlice.actions;

export default modalSlice;
