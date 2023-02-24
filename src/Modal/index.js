import React from 'react';
//portal 2
import ReactDOM from "react-dom";

import './Modal.css';

function Modal({ children }) {
    return ReactDOM.createPortal(
      <div className="ModalBackground">
        {children}
      </div>,
      document.getElementById('modal')
    );
  }
  
  export { Modal };