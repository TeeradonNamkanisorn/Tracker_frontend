import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function DropDownExpense() {
  const [show, setShow] = useState(false);
  const boxRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (e) => {
    if (!boxRef.current.contains(e.target.value) && boxRef !== null) {
      window.removeEventListener("click", handleClickOutside);
    }

    setShow(false);
  };

  const handleClick = () => {
    setShow((prev) => !prev);
    if (show) {
      window.removeEventListener("click", handleClickOutside);
    } else {
      setTimeout(() => {
        window.addEventListener("click", handleClickOutside);
      });
    }
  };

  return (
    <>
      <div
        className="border border-black w-20 h-10 bg-red-600 text-white flex justify-center items-center relative p-0"
        role={"button"}
        onClick={handleClick}
        ref={boxRef}
      >
        Expense
        {show && (
          <div className="absolute top-10 w-full">
            <div
              className=" bg-red-400 text-white h-8 border-black border text-sm w-full flex justify-center items-center"
              onClick={() => navigate("/view-expense")}
            >
              View
            </div>
            <div
              className=" bg-red-400 text-white  h-8 border-black border text-sm w-full flex justify-center items-center"
              onClick={() => navigate("/edit-expense")}
            >
              Edit
            </div>
            <div
              className=" bg-red-400 text-white h-8 border-black border text-sm w-full flex justify-center items-center"
              onClick={() => navigate("/create-expense")}
            >
              Create
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DropDownExpense;
