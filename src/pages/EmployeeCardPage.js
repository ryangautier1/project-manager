import React from 'react';
import EmployeeCard from "./components/EmployeeCard";
import Footer from "./components/Footer"
import CardContainer from './components/CardContainer';

function EmployeeCardPage() {
  return (
    <div>
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

export default EmployeeCardPage;
