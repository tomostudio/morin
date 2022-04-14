import Modal from "react-modal";
import { Close } from "../utils/svg";

Modal.setAppElement("#__next");

const GalleryModal = ({
  children,
  isOpen,
  onRequestClose,
  closeTimeoutMS,
  className,
  classNameOuter,
  classNameModalContent,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={closeTimeoutMS || 300}
      className={`GalleryModal__Content ${classNameModalContent}`}
      overlayClassName="GalleryModal__Overlay"
    >
      <div
        className={`GalleryModal__Content--Outer ${
          classNameOuter ? classNameOuter : ""
        }`}
      >
        <button onClick={onRequestClose} className="GalleryModal__Close">
          <Close />
        </button>

        <div
          className={`GalleryModal__Content--Inner ${className ? className : ""}`}
        >
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default GalleryModal;
