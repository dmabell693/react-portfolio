import React from "react";
import "./style.css";

function PageWrapper(props) {

    return (
        <div className="container content-container">
            {props.children}
        </div>
    )
}


export default PageWrapper;