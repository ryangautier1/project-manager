import React from "react";
import "./style.css";
import TaskCards from "../TaskCards";

function ProjectInfoTable(props) {
  return (
    <div className="mt-8 px-4 w-full">

      <h2 className="text-xl py-3">
        Project Title
      </h2>
      <div className="mt-2 mb-5 text-gray-600 text-sm sm:text-base">Project Descripton: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div className="flex flex-row justify-around">
        <div className="mt-2 mb-5 text-gray-600 text-sm sm:text-base"><span className="text-orange-500">Start Date: </span>01/01/2020</div>
        <div className="mt-2 mb-5 text-gray-600 text-sm sm:text-base"><span className="text-orange-500">Expected End Date: </span>05/12/2020</div>
      </div>
      <hr />
      <div className="text-xl mt-2">Tasks</div>
        <TaskCards tasks={props.tasks} />
    </div>
  );
}

export default ProjectInfoTable;