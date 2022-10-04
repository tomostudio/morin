import React from "react";
import Modal from "react-modal";
import { Close } from "../utils/svg";

Modal.setAppElement("#__next");

const PageModal = ({
  children,
  isOpen,
  onRequestClose,
  closeTimeoutMS,
  className,
  classNameOuter,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={closeTimeoutMS || 200}
      className="PageModal__Content "
      overlayClassName="PageModal__Overlay"
    >
      <div className={`PageModal__Content--Outer ${classNameOuter ? classNameOuter : ""}  min-h-screen md:min-h-0 flex justify-center flex-col`}>
        <button aria-label="page_modal" onClick={onRequestClose} className="Modal__Close">
          <Close />
        </button>

        <div className={`PageModal__Content--Inner ${className ? className : ""} `}>{children}</div>
      </div>
    </Modal>
  );
};

export default PageModal;
