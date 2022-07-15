import React from 'react';
import './popup.css';

function Popup(props) {
  const { handleClose, content } = props;
  return (
    <div className="popupBoxContent">
      <div className="popupBox">
        <div className="box">
          <div className="closeContent">
            <h2>Title</h2>
            <button type="button" className="close" onClick={handleClose}>
              X
            </button>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}

export default Popup;
