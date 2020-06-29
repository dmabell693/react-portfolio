import React from "react";
import "./style.css";

function ProjectCard(props) {

    return (

        <div className="card m-4">
            <div className="card-header text-center">
                <h3 className="rounded">{props.title}</h3>
            </div>
            <div className="card-body">
                <a href={props.deployedURL} target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid hover-outline" src={props.screenshot} alt="project screenshot" />
                </a>
            </div>
            <div className="card-footer text-center">
                <p className="mt-3">
                    <a href={props.repoURL} target="_blank" rel="noopener noreferrer">{props.title} Repo Link</a>
                </p>
            </div>
        </div>
    )
}


export default ProjectCard;