import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

const LoadingContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => {
  const ctx = useContext(LoadingContext);
  return ctx;
};

export { useLoading, LoadingContextProvider };
