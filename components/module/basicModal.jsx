import React from "react";
import Modal from "react-modal";
import { Close } from "../utils/svg";

Modal.setAppElement("#__next");

const BasicModal = ({
  children,
  isOpen,
  onRequestClose,
  closeTimeoutMS,
  className,
  classNameOuter, 
  onAfterClose,
  classNameModalContent
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onAfterClose={onAfterClose}
      closeTimeoutMS={closeTimeoutMS || 300}
      className={`BasicModal__Content ${classNameModalContent}`}
      overlayClassName="BasicModal__Overlay"
    >
      <div className={`BasicModal__Content--Outer ${classNameOuter ? classNameOuter : ""}`}>
        <button onClick={onRequestClose} className="BasicModal__Close">
          <Close />
        </button>

        <div className={`BasicModal__Content--Inner ${className ? className : ""}`}>{children}</div>
      </div>
    </Modal>
  );
};

export default BasicModal;
