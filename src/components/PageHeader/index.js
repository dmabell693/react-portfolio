import React from "react";
import "./style.css";

function PageHeader(props) {

    return (
        <div className="row border-row">
            <div className="col top-col">
                <span className="navbar-brand mb-0 h1" id="content-header">{props.title}</span>
            </div>
        </div>
    )
}


export default PageHeader;