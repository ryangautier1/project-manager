import React from "react";
import "./style.css"

function ProjectCard() {
  return (
    //Container for card
    <div className="px-3" id="project-card">
      {/* Contatiner for card content */}
      <div className="rounded overflow-hidden shadow-lg my-5 mx-auto border-gray-100 border p-4">
        {/* Container for Card Heading */}
        <div className="mb-2 flex flex-row items-center">
          <img className="inline-block rounded-full h-16 w-16" src="https://via.placeholder.com/150x150" alt="placeholder" />
          <div className="inline-block text-lg ml-4">
            <div>Project Title</div>
            <div className="text-orange-500">Role Here</div>
          </div>
        </div>
        <hr />
        <div className="mt-2">555-555-5555</div>
        <div className="mt-2">email@email.com</div>
        <div className="mt-2">Department Here</div>
      </div>
    </div>
  );
}

export default ProjectCard;