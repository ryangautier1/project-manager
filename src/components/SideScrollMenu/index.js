import React from "react";
import "./style.css";

const data = [
  "Project 1",
  "Project 2",
  "Project 3",
  "Project 4",
  "Project 5",
  "Project 6",
  "Project 7",
  "Project 8",
  "Project 9",
  "Project 10"
]

function SideScrollMenu() {
  return (
    <div className="overflow-x-auto w-full sidescroll-menu py-2">
      <div className="flex flex-row">
      {data.map(item => {
        return (
        <div className="mx-3 border border-orange-500 rounded-full px-4 py-1 whitespace-no-wrap cursor-pointer">{item}</div>
        )
      })}
      </div>
    </div>
  )
}

export default SideScrollMenu;