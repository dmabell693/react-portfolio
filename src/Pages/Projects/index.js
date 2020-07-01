import React from "react";
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import ProjectCardWrapper from "../../components/ProjectCardWrapper";
import ProjectCard from "../../components/ProjectCard";
import projects from "./projectData";

function Projects() {

    return (
        <PageWrapper>
            <PageHeader title="Projects" />
            <ProjectCardWrapper>
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        screenshot={project.screenshot}
                        deployedURL={project.deployedURL}
                        repoURL={project.repoURL}
                    />
                ))}
            </ProjectCardWrapper>
        </PageWrapper>
    )
}

export default Projects;