import React from "react";
import { useError } from "../contexts/ErrorContext";
import { useLoading } from "../contexts/LoadingContext";
import { useLogin } from "../contexts/LoginContext";
import axios from "../config/axios";
import { setAccessToken } from "../services/localStorage";
import { useUser } from "../contexts/UserContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const { email, setEmail, password, setPassword } = useLogin();
  const { fetchUser } = useUser();
  const { setError } = useError();
  const { setLoading } = useLoading();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const body = { email, password };
      const res = await axios.post("/auth/login", body);
      const token = res.data.token;
      setAccessToken(token);
      await fetchUser();
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="max-w-lg mx-auto block mb-3 mt-[15%] px-4 w-3/5 border">
        <h3 className="text-center font-bold block mx-auto w-auto mt-7">
          Sign In With Email
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <button
            type="submit"
            className="rounded border bg-blue-700 text-white mt-5 mb-5 block w-36 mx-auto"
          >
            Login
          </button>
        </form>
      </div>

      <Link
        className="text-blue-700 underline text-center block mx-auto"
        to={"/register"}
      >
        Don't have an account? Register here
      </Link>
    </>
  );
}

export default LoginPage;
