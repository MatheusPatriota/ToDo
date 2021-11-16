import React from "react";
import PopupStyles from "./styles";

type PopupTypes = {
  handleClose: any;
  content: any;
};
function Popup(props: PopupTypes) {
  return (
    <PopupStyles>
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div className="content">{props.content}</div>
      </div>
    </PopupStyles>
  );
}

export default Popup;
