"use client";

import {
  openModal as openModalReducer,
  closeModal as closeModalReducer,
  addClosingModal,
  addOpeningModal,
  removeOpenningModal,
  removeClosingModal,
} from "../state/modals/modalsSlice";
import { useAppSelector, useAppDispatch } from "@/state/store";
import { ModalIdsType } from "../state/modals/types";

const useModals = () => {
  const modalState = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  const openModal = async ({
    modalId,
    submitEvent,
  }: {
    modalId: ModalIdsType;
    submitEvent?: {
      key?: ModalIdsType;
      onSuccess?: (e?: any) => any;
      onError?: (e?: any) => any;
    };
  }) => {
    dispatch(addOpeningModal({ modalId, submitEvent }));
    setTimeout(() => {
      dispatch(openModalReducer({ modalId }));
      return dispatch(removeOpenningModal(modalId));
    }, 50);
  };

  const closeModal = async (modalId: ModalIdsType) => {
    dispatch(addClosingModal(modalId));
    setTimeout(() => {
      dispatch(closeModalReducer(modalId));
      return dispatch(removeClosingModal(modalId));
    }, 300);
  };

  const closeLast = () => {
    if (modalState.open.length) {
      const lastModalId = modalState.open[modalState.open.length - 1];
      dispatch(addClosingModal(lastModalId));
      setTimeout(() => {
        dispatch(closeModalReducer(lastModalId));
        dispatch(removeClosingModal(lastModalId));
      }, 300);
    }
  };

  // UI
  const isModalVisible = (modalId: ModalIdsType) => {
    return (
      isModalOpen(modalId) || isModalOpening(modalId) || isModalOpening(modalId)
    );
  };

  // Controllers
  const isModalOpen = (modalId: ModalIdsType) => {
    return modalState.open.includes(modalId);
  };

  const isModalOpening = (modalId: ModalIdsType) => {
    return modalState.opening.includes(modalId);
  };

  const isModalClosing = (modalId: ModalIdsType) => {
    return modalState.closing.includes(modalId);
  };
  // End controllers

  return {
    modalState,
    closeModal,
    isModalVisible,
    isModalOpen,
    isModalClosing,
    isModalOpening,
    openModal,
    closeLast,
  };
};

export default useModals;
