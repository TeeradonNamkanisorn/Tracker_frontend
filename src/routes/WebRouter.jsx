import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorToast from "../components/common/ErrorToast";
import Spinner from "../components/common/Spinner";
import Navbar from "../components/Navbar";
import UserOutlet from "../components/outlets/UserOutlet";
import { useError } from "../contexts/ErrorContext";
import { useLoading } from "../contexts/LoadingContext";
import { UserContextProvider, useUser } from "../contexts/UserContext";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

function WebRouter() {
  const { loading } = useLoading();
  const { error } = useError();
  const user = useUser();
  const isSignedIn = !!user.email;

  const notSignedInRoutes = (
    <Routes>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Routes>
  );

  const signedInRoutes = (
    <Routes>
      <Route path="/" element={<UserOutlet />}>
        <Route path="" element={<HomePage />} />
      </Route>
    </Routes>
  );

  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      {loading && <Spinner />}
      {error && <ErrorToast error={error} />}
    </>
  );
}

export default WebRouter;
