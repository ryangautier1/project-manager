import React from 'react';
import EmployeeCard from "../components/EmployeeCard";
import CardContainer from '../components/CardContainer';

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
    </div>
  );
}

export default EmployeeCardPage;
