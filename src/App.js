import React from 'react';
import Navbar from "./components/Navbar";
import EmployeeCard from "./components/EmployeeCard";
import Footer from "./components/Footer"
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div>
      <Navbar />
      <CardContainer>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />

      </CardContainer>
      <Footer />
    </div>
  );
}

export default App;
