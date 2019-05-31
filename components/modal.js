import React from "react";
import { CSSTransition} from 'react-transition-group';

const Modal = ({modal, modalImg, hideModal}) => {

  return (
    <CSSTransition
      in={modal} 
      timeout={400} 
      classNames="modal-fade" 
      unmountOnExit>

      <div 
        className="modal"
        onClick={hideModal}
        >
        <div className="modal-img">
          <img src={modalImg} alt=""/>
        </div>
      </div>

    </CSSTransition>
  )
}

export default Modal;
