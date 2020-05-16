import React from 'react';
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer"
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
