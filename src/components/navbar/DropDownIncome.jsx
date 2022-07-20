import React, { useEffect, useRef, useState } from "react";
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
          <>
            <div className="absolute bg-green-400 text-white top-10 h-8 border-black border text-sm w-full flex justify-center items-center">
              View
            </div>
            <div
              className="absolute bg-green-400 text-white top-[73px] h-8 border-black border text-sm w-full flex justify-center items-center"
              onClick={() => navigate("/edit-income")}
            >
              Edit
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default DropDownIncome;
