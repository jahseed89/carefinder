import React from "react";
import './modal.scss'

const Modal = ({text, closeModal, children}) => {
  return (
    <div className="modal">
      <div className="modalOverlay">
        <div className="modalBox">
          <div className="modalHeader">
            <h3 className="edit__text">{text}</h3>
            <button onClick={closeModal}>X</button>
          </div>
          <div className="modal__items">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
