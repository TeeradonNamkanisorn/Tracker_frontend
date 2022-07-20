import { getAccessToken } from "../services/localStorage";
import { useError } from "./ErrorContext";
import { useLoading } from "./LoadingContext";
import axios from "../config/axios";

const {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} = require("react");

const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { setLoading } = useLoading();
  const { setError } = useError();

  const clearUser = () => {
    setUserId(null);
    setUsername("");
    setEmail("");
  };

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get("/user/self");
      setUserId(res.data.user.id);
      setEmail(res.data.user.email);
      setUsername(res.data.user.username);
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (getAccessToken()) {
      fetchUser();
    }
  }, [fetchUser]);
  return (
    <UserContext.Provider
      value={{ username, setUsername, email, setEmail, clearUser, fetchUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const ctx = useContext(UserContext);
  return ctx;
};

export { useUser, UserContextProvider };
