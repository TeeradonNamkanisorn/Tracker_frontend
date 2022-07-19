import { createContext, useContext, useState } from "react";

const RegisterContext = createContext();
const RegisterContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <RegisterContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

const useRegister = () => {
  const ctx = useContext(RegisterContext);
  return ctx;
};

export { RegisterContextProvider, useRegister };
