import React from "react";

const Modal = ({ visible, setVisible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="transparent-bg">
      <div className="modal">
        <img
          onClick={() => setVisible(false)}
          className="close-btn"
          src="https://img.icons8.com/ios/512/close-window--v1.png"
        />
        <div className="form-field">
          <label>First Name</label>
          <input type="text" placeholder="Please Enter First Name" />
        </div>
        <div className="form-field">
          <label>Last Name</label>
          <input type="text" placeholder="Please Enter Last Name" />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input type="email" placeholder="Please Enter Your Email" />
        </div>
        <button onClick={() => setVisible(false)}>Submit</button>
      </div>
    </div>
  );
};

export default Modal;
