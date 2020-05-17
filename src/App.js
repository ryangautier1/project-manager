import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import ProjectTablePage from "./pages/ProjectTablePage";



function App() {
  return (
    <div>
      <Navbar>
        <ProjectTablePage />
        <Footer />
      </Navbar>

    </div>
  );
}

export default App;
