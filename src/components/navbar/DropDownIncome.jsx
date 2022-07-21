import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function DropDownIncome() {
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
        className="border border-black w-20 h-10 bg-green-600 text-white flex justify-center items-center relative p-0"
        role={"button"}
        onClick={handleClick}
        ref={boxRef}
      >
        Income
        {show && (
          <div className="absolute top-10 w-full">
            <div
              className=" bg-green-400 text-white h-8 border-black border text-sm w-full flex justify-center items-center"
              onClick={() => navigate("/view-income")}
            >
              View
            </div>
            <div
              className=" bg-green-400 text-white  h-8 border-black border text-sm w-full flex justify-center items-center"
              onClick={() => navigate("/edit-income")}
            >
              Edit
            </div>
            <div
              className=" bg-green-400 text-white h-8 border-black border text-sm w-full flex justify-center items-center"
              onClick={() => navigate("/create-income")}
            >
              Create
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DropDownIncome;
