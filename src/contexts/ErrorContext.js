import { useContext, useState, createContext } from "react";

const ErrorContext = createContext();
const ErrorContextProvider = ({ children }) => {
  const [error, setError] = useState("");

  const setErrorTimeout = (err) => {
    setError(err);
    setTimeout(() => {
      setError("");
    }, 6000);
  };

  return (
    <ErrorContext.Provider value={{ error, setError: setErrorTimeout }}>
      {children}
    </ErrorContext.Provider>
  );
};

const useError = () => {
  const ctx = useContext(ErrorContext);
  return ctx;
};

export { useError, ErrorContextProvider };
