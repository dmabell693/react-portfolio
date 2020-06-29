import React from "react";
import "./style.css";

function ProjectCardImages(props) {

    return (

        <img className="img-fluid hover-outline" src={props.screenshot} alt="project screenshot"/>
    )
}


export default ProjectCardImages;