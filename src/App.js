import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import ProjectTablePage from './pages/ProjectTablePage';
import EmployeeCardPage from './pages/EmployeeCardPage';
import ProjectCardPage from './pages/ProjectCardPage';



function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Route exact path="/" component={ProjectTablePage}/>
          <Route exact path="/projectinfo" component={ProjectTablePage}/>
          <Route exact path="/employees" component={EmployeeCardPage}/>
          <Route exact path="/projects" component={ProjectCardPage}/>
          <Footer />
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
