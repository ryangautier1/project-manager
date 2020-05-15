import React from "react";

function EmployeeCard() {
  return (
    //Container for card
    <div className="px-3">
      {/* Contatiner for card content */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-auto border-gray-100 border p-4">
        {/* Container for Card Heading */}
        <div className="mb-2 flex flex-row items-center">
          <img className="inline-block rounded-full h-16 w-16" src="https://via.placeholder.com/300x300" alt="placeholder" />
          <div className="inline-block text-lg ml-4">
            <div>Name Here</div>
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

export default EmployeeCard;