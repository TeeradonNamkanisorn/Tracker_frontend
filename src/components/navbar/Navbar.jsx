import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { removeAccessToken } from "../../services/localStorage";
import DropDownExpense from "./DropDownExpense";
import DropDownIncome from "./DropDownIncome";

function Navbar() {
  const navigate = useNavigate();
  const { clearUser } = useUser();

  const handleLogout = () => {
    removeAccessToken();
    clearUser();
  };

  return (
    <div className="block relative top-0 bg-gray-100 h-10">
      <div className="flex absolute left-0 top-0">
        <div
          className="border border-black w-20 h-10 bg-black text-white flex justify-center items-center p-0"
          role={"button"}
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <DropDownIncome />
        <div
          className="border border-black w-20 h-10 bg-red-600 text-white flex justify-center items-center p-0"
          role={"button"}
        >
          <DropDownExpense />
        </div>
      </div>
      <div className="flex absolute right-0 top-0">
        <div
          className="border border-black w-20 h-10 bg-gray-600 text-white flex justify-center items-center p-0"
          role={"button"}
          onClick={handleLogout}
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
