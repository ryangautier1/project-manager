import React from 'react';
import SideScrollMenu from '../components/SideScrollMenu';
import ProjectInfoTable from '../components/ProjectInfoTable';
import pic from "../ryanpicturesquare.png";

const tasks = [
  {
    name: "Task 1",
    employees: [
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      }
    ]
    
  },{
    name: "Task 2",
    employees: [
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      }
    ]
    
  },{
    name: "Task 3",
    employees: [
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      }
    ]
    
  },
  {
    name: "Task 4",
    employees: [
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      }
    ]
  },{
    name: "Task 5",
    employees: [
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      },
      {
        name: "Name Here",
        role: "Role Here",
        pic: pic
      }
    ]
    
  }

]

function ProjectTablePage() {
  return (
    <div>
      <SideScrollMenu />
      <ProjectInfoTable tasks={tasks} />
    </div>
  );
}

export default ProjectTablePage;
