import React from 'react';
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer"
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div>
      <Navbar />
      <CardContainer>
        <ProjectCard />

      </CardContainer>
      <Footer />
    </div>
  );
}

export default App;
