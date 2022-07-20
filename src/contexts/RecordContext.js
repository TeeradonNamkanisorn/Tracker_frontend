import { useContext, createContext, useState, useCallback } from "react";
import { useError } from "./ErrorContext";
import { useLoading } from "./LoadingContext";
import axios from "../config/axios";

const RecordContext = createContext();

const RecordContextProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [records, setRecords] = useState([]);
  const { setLoading } = useLoading();
  const { setError } = useError();
  const getAllIncomes = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get("/record/records?type=INCOME");
      setIncomes(res.data.records);
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <RecordContext.Provider
      value={{
        incomes,
        setIncomes,
        expenses,
        setExpenses,
        records,
        setRecords,
        getAllIncomes,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};

const useRecords = () => {
  const ctx = useContext(RecordContext);
  return ctx;
};

export { useRecords, RecordContextProvider };
