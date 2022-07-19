import React from "react";

function Navbar() {
  return (
    <div className="block relative top-0 bg-gray-100 h-10">
      <div className="flex absolute left-0 top-0">
        <div
          className="border border-black w-20 h-10 bg-black text-white flex justify-center items-center p-0"
          role={"button"}
        >
          Home
        </div>
        <div
          className="border border-black w-20 h-10 bg-green-600 text-white flex justify-center items-center p-0"
          role={"button"}
        >
          Income
        </div>
        <div
          className="border border-black w-20 h-10 bg-red-600 text-white flex justify-center items-center p-0"
          role={"button"}
        >
          Expense
        </div>
      </div>
      <div className="flex absolute right-0 top-0">
        <div
          className="border border-black w-20 h-10 bg-gray-600 text-white flex justify-center items-center p-0"
          role={"button"}
        >
          Logout
        </div>
        <div
          className="border border-black w-20 h-10 bg-blue-500 text-white flex justify-center items-center p-0"
          role={"button"}
        >
          About
        </div>
      </div>
    </div>
  );
}

export default Navbar;
