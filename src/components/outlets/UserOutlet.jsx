import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function UserOutlet() {
  return (
    <>
      <Navbar />
      <div>Outlet</div>
      <Outlet />
    </>
  );
}

export default UserOutlet;
