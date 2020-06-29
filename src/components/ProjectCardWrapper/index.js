import React from "react";
import "./style.css";

function ProjectCardWrapper(props) {

    return (
        <div className="container mb-5">
            <div className="row row-cols-1 row-cols-md-3 justify-content-center pb-0">
                {props.children}
            </div>
        </div>
    )
}


export default ProjectCardWrapper;