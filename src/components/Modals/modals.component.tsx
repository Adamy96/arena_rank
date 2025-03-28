"use client";

import { AddAccount } from "./AddAccount";
import { useModals } from "@/hooks";
import styles from "./modals.styles.module.scss";
import { ModalIdsType } from "@/state/modals/types";

const Modals = () => {
  const {
    modalState,
    isModalClosing,
    isModalOpen,
    closeLast,
    isModalVisible,
    isModalOpening,
  } = useModals();

  const openStyles = (modalId: ModalIdsType) => {
    return isModalOpen(modalId) &&
      !isModalClosing(modalId) &&
      !isModalOpening(modalId)
      ? styles.open
      : "";
  };

  const content = {
    addAccount: (
      <AddAccount
        className={`${styles.modalContent} ${styles.rightToLeft} ${openStyles(
          "addAccount"
        )}`}
      />
    ),
  };

  const getZindex = (modalId: ModalIdsType) => {
    const indexOpen = modalState.open.lastIndexOf(modalId);
    const indexClosing = modalState.closing.lastIndexOf(modalId);
    return (
      1000 +
      (indexOpen === -1 ? 0 : indexOpen) +
      (indexClosing === -1 ? 0 : indexClosing)
    );
  };

  return (
    <>
      <div className={styles.modalContainer}>
        <div
          className={`${styles.modalOverlay} ${
            modalState.open.length ? styles.open : ""
          }`}
          onClick={closeLast}
        ></div>

        {Object.keys(content)
          .map((key: ModalIdsType) => {
            const show = isModalVisible(key);
            return (
              show && (
                <div
                  style={{ zIndex: getZindex("addAccount"), position: "fixed" }}
                  key={key}
                >
                  {content[key]}
                </div>
              )
            );
          })
          .filter(Boolean)}
      </div>
    </>
  );
};

export default Modals;
