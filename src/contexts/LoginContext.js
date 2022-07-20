const { createContext, useState, useContext } = require("react");

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginContext.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => {
  const ctx = useContext(LoginContext);
  return ctx;
};

export { useLogin, LoginContextProvider };
