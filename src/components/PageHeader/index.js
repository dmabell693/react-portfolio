import React from "react";
import "./style.css";

function PageHeader(props) {

    return (
        <div class="row border-row">
            <div class="col top-col">
                <span class="navbar-brand mb-0 h1" id="content-header">{props.title}</span>
            </div>
        </div>
    )
}


export default PageHeader;