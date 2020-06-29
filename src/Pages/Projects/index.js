import React from "react";
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import ProjectCardWrapper from "../../components/ProjectCardWrapper";
import ProjectCard from "../../components/ProjectCard";
// import ProjectCardImages from "../../components/ProjectCardImages";
import projects from "../../projects.json";
import "./style.css";
import directory from "./react-employee-directory-portfolio-screenshot.png";
// import hikehire from "./hike-hire-screenshot.png";
// import tralesales from "./Trales-and-Ales-screenshot.png";
// import tracker from "./employee-tracker-screenshot.png";
// import burgernator from "./burgernator-screenshot.png";
// import generator from "./team-profile-generator-scrnsht-update.png";

// const images = [
//     { "id": 1, "image": directory },
//     { "id": 2, "image": hikehire },
//     { "id": 3, "image": tralesales },
//     { "id": 4, "image": tracker },
//     { "id": 5, "image": burgernator },
//     { "id": 6, "image": generator }
// ];

function Projects() {

    return (
        <PageWrapper>
            <PageHeader title="Projects" />
            <ProjectCardWrapper>
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        screenshot={directory}
                        deployedURL={project.deployedURL}
                        repoURL={project.repoURL}
                    />
                ))}
            </ProjectCardWrapper>
        </PageWrapper>
    )
}

export default Projects;