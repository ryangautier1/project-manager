import React from "react";
import AddButton from "../AddButton";
import "./style.css";

function TaskCards(props) {
  return (

    //Container for card
    <div className="flex flex-wrap flex-auto xl:mx-20 mx-3 py-2 justify-start">

    {/* Contatiner for card content */}
    {props.tasks.map(item => {
      return (
        <div className="px-3">

          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5 mx-auto border-gray-100 border p-4 task-card">
            <div className="text-lg mb-2">{item.name}</div>
            <hr />
            <div className="text-md mb-1">Assigned Employees</div>
            <div className="overflow-auto task-employees">
            {item.employees.map(employee => {
              return (
                <div className="my-2 flex flex-row items-center">
                  <img className="inline-block rounded-full h-12 w-12" src={employee.pic} alt="placeholder" />
                  <div className="inline-block text-md ml-4">
                    <div>{employee.name}</div>
                    <div className="text-orange-500">{employee.role}</div>
                  </div>
                </div>
              )
            })}
            </div>

          </div>

        </div>
      )
    })}
              <AddButton />

    </div>

  )
}


export default TaskCards;