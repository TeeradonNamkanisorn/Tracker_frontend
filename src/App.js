import "./App.css";
import { ErrorContextProvider } from "./contexts/ErrorContext";
import { LoadingContextProvider } from "./contexts/LoadingContext";
import { RegisterContextProvider } from "./contexts/RegisterContext";
import { UserContextProvider } from "./contexts/UserContext";
import WebRouter from "./routes/WebRouter";

function App() {
  return (
    <LoadingContextProvider>
      <ErrorContextProvider>
        <UserContextProvider>
          <RegisterContextProvider>
            <WebRouter />
          </RegisterContextProvider>
        </UserContextProvider>
      </ErrorContextProvider>
    </LoadingContextProvider>
  );
}

export default App;
