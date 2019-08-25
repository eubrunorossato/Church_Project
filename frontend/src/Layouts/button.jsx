import React from "react";

export default props => (
    <button className={props.style} onClick={props.onClick}>{props.name}</button>
)