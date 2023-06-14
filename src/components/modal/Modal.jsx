import { createPortal } from 'react-dom';

import Calculator from './Calculator';

import classes from './Modal.module.css';

const Backdrop = ({ onModalToggle }) => {
  return <div className={classes.backdrop} onClick={onModalToggle} />;
};

const Modal = ({ onModalToggle }) => {
  const modalNode = document.getElementById('modal');

  return (
    <>
      {createPortal(<Backdrop onModalToggle={onModalToggle} />, modalNode)}
      {createPortal(
        <div className={classes.modal}>
          <Calculator onModalToggle={onModalToggle} />
        </div>,
        modalNode,
      )}
    </>
  );
};

export default Modal;
