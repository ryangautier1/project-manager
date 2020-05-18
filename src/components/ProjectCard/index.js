import React from "react";
import pic from "../../ryanpicturesquare.png"
import "./style.css"

const employees = [
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

function ProjectCard() {
  return (
    //Container for card
    <div className="px-3 project-card">
      {/* Contatiner for card content */}
      <div className="rounded overflow-hidden shadow-lg my-5 mx-auto border-gray-100 border p-4 hover:border-orange-500 cursor-pointer">
        {/* Container for Card Heading */}
        <div className="mb-2 flex flex-row items-center">
          <img className="inline-block rounded-full h-16 w-16" src="https://via.placeholder.com/150x150" alt="placeholder" />
          <div className="inline-block text-xl ml-4">
            <div>Project Title</div>
          </div>
        </div>
        <hr />
        <div className="mt-2 text-gray-600 text-sm sm:text-base">Project Descripton: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div className="mt-2">Assigned Team Members: </div>
        <div className="my-2 flex flex-wrap items-center overflow-auto project-employees">
          {employees.map(item => {
            return(
            <div className="my-2 flex mr-8">
              <img className="inline-block rounded-full h-12 w-12" src={item.pic} alt="placeholder" />
              <div className="inline-block text-lg ml-4">
                <div className="text-sm sm:text-base">{item.name}</div>
                <div className="text-sm sm:text-base text-orange-500">{item.role}</div>
              </div>
            </div>
            )
          })}

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;