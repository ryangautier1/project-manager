import React from "react";

function EmployeeCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-auto border-gray-100 border p-4">
      <img className="inline-block rounded-full h-16 w-16" src="https://via.placeholder.com/300x300" alt="placeholder" />
      <div className="inline-block text-lg ml-4">Name Here</div>
    </div>
  );
}

export default EmployeeCard;