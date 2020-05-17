import React from 'react';
import ProjectCard from "./components/ProjectCard";
import CardContainer from './components/CardContainer';

function ProjectCardPage() {
  return (
      <CardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </CardContainer>
  );
}

export default ProjectCardPage;
