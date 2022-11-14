import React from "react";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="pop-inner"></div>
            <button className="close-btn">close</button>
            {props.children}
        </div>
    ) : "";
}

export default Popup;
