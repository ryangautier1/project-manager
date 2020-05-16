import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import ProjectInfoTable from './components/ProjectInfoTable';
import SideScrollMenu from './components/SideScrollMenu';

function App() {
  return (
    <div>
      <Navbar />
      <SideScrollMenu />
      <ProjectInfoTable />
      <Footer />
    </div>
  );
}

export default App;
