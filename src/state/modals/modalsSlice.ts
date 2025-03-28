import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = [...state.open, action.payload.modalId];
    },
    addClosingModal: (state, action) => {
      state.closing = [...state.closing, action.payload];
    },
    removeClosingModal: (state, action) => {
      state.closing = state.closing.filter(
        (modalId) => modalId !== action.payload
      );
    },
    addOpeningModal: (state, action) => {
      const event = {
        key: action.payload.modalId,
        ...action.payload.submitEvent,
      };
      return (state = {
        ...state,
        opening: [...state.opening, action.payload.modalId],
        submitEvent: action.payload.submitEvent
          ? [...state.submitEvent, event]
          : state.submitEvent,
      });
    },
    removeOpenningModal: (state, action) => {
      state.opening = state.opening.filter(
        (modalId) => modalId !== action.payload
      );
    },
    closeModal: (state, action) => {
      return (state = {
        ...state,
        open: state.open.filter((modalId) => modalId !== action.payload),
        submitEvent: state.submitEvent.filter(
          (event) => event.key !== action.payload
        ),
      });
    },
  },
});

export const {
  openModal,
  closeModal,
  addClosingModal,
  removeClosingModal,
  addOpeningModal,
  removeOpenningModal,
} = modalsSlice.actions;
export default modalsSlice.reducer;
