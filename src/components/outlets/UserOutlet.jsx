import React from "react";
import { Outlet } from "react-router-dom";
import { RecordContextProvider } from "../../contexts/RecordContext";
import Navbar from "../navbar/Navbar";

function UserOutlet() {
  return (
    <>
      <RecordContextProvider>
        <Navbar />
        <Outlet />
      </RecordContextProvider>
    </>
  );
}

export default UserOutlet;
