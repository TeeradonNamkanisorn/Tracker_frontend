import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorToast from "../components/common/ErrorToast";
import Modal from "../components/common/Modal";
import Spinner from "../components/common/Spinner";
import Navbar from "../components/navbar/Navbar";
import UserOutlet from "../components/outlets/UserOutlet";
import { useError } from "../contexts/ErrorContext";
import { useLoading } from "../contexts/LoadingContext";
import { LoginContextProvider } from "../contexts/LoginContext";
import { RegisterContextProvider } from "../contexts/RegisterContext";
import { UserContextProvider, useUser } from "../contexts/UserContext";
import EditIncomePage from "../pages/EditIncomePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { getAccessToken } from "../services/localStorage";

function WebRouter() {
  const { loading } = useLoading();
  const { error } = useError();
  const user = useUser();
  const isSignedIn = !!user.email;
  const token = getAccessToken();

  const notSignedInRoutes = (
    <Routes>
      <Route>
        <Route
          path="/register"
          element={
            <RegisterContextProvider>
              <RegisterPage />
            </RegisterContextProvider>
          }
        />
        <Route
          path="/login"
          element={
            <LoginContextProvider>
              <LoginPage />
            </LoginContextProvider>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );

  const signedInRoutes = (
    <Routes>
      <Route path="/" element={<UserOutlet />}>
        <Route path="" element={<HomePage />} />
        <Route path="edit-income" element={<EditIncomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <>
      {isSignedIn ? signedInRoutes : token ? <Spinner /> : notSignedInRoutes}
      {loading && <Spinner />}
      {error && <ErrorToast error={error} />}
    </>
  );
}

export default WebRouter;
