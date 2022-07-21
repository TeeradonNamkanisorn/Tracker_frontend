import React from "react";
import { useRegister } from "../contexts/RegisterContext";
import axios from "../config/axios";
import { useLoading } from "../contexts/LoadingContext";
import { useError } from "../contexts/ErrorContext";
import { setAccessToken } from "../services/localStorage";
import Navbar from "../components/navbar/Navbar";
import { useUser } from "../contexts/UserContext";
import { Link } from "react-router-dom";

function RegisterPage() {
  const obj = useRegister();
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = obj;
  const { setLoading } = useLoading();
  const { setError } = useError();
  const { fetchUser } = useUser();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //validation step
      if (confirmPassword !== password) {
        return setError("Passwords must be the same.");
      }

      const body = { username, email, password };
      setLoading(true);
      const result = await axios.post("/auth/register", body);
      console.log(result);
      const token = result.data.token;
      setAccessToken(token);
      await fetchUser();
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="max-w-lg mx-auto block mb-3 mt-[15%] px-4 w-3/5 border">
        <h3 className="text-center font-bold block mx-auto w-auto mt-7">
          Sign up for free
        </h3>
        <form className="flex flex-col mx-5 my-3" onSubmit={handleSubmit}>
          <div className="my-2">
            <label className="block my-1 ml-1" htmlFor="email">
              email
            </label>
            <input
              id="email"
              value={email}
              className="border w-full"
              type={"email"}
              placeholder=" enter email"
              onChange={handleEmailChange}
            ></input>
          </div>

          <div className="my-2">
            <label className="block my-1 ml-1" htmlFor="username">
              username
            </label>
            <input
              id="username"
              className="border w-full"
              type={"text"}
              placeholder=" enter username"
              value={username}
              onChange={handleUsernameChange}
            ></input>
          </div>

          <div className="my-1 ml-1">
            <label className="block" htmlFor="password">
              password
            </label>
            <input
              id="password"
              className="border w-full"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            ></input>
          </div>

          <div className="my-1 ml-1">
            <label className="block w-full" htmlFor="confirmPassword">
              confirm password
            </label>
            <input
              id="confirmPassword"
              className="border w-full"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            ></input>
          </div>

          <button
            type="submit"
            className="rounded border bg-green-700 text-white mt-5 mb-5 block w-36 mx-auto"
          >
            Register
          </button>
        </form>
      </div>
      <Link
        className="text-blue-700 underline text-center block mx-auto"
        to={"/login"}
      >
        Already have an account? Login here
      </Link>
    </>
  );
}

export default RegisterPage;
