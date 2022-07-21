import React, { useEffect, useState } from "react";
import AllViewTable from "../components/tables/allTypes/AllViewTable";
import { useError } from "../contexts/ErrorContext";
import { useLoading } from "../contexts/LoadingContext";
import { useRecords } from "../contexts/RecordContext";

function HomePage() {
  const { records, getRecords } = useRecords();
  const [date, setDate] = useState("");
  const { setError } = useError();
  const { setLoading } = useLoading();
  const [tableHeader, setTableHeader] = useState("Records found on: today");
  const [mode, setMode] = useState("all");
  console.log(records);
  useEffect(() => {
    getRecords({ today: true });
  }, []);

  const handleSearchByDate = async () => {
    try {
      if (!date) return setError("You must specify a date to search by date");
      setLoading(true);
      await getRecords({ date });
      setTableHeader("Records found on: " + date);
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchToday = async () => {
    getRecords({ today: true });
    setTableHeader("Records found on: today");
  };

  const handleSearchAll = async () => {
    getRecords();
    setTableHeader("Records found on: every day");
  };

  const getTotal = () => {
    if (mode === "all")
      return records.reduce((sum, cur) => {
        if (cur.type === "INCOME") return sum + cur.amount;
        return sum - cur.amount;
      }, 0);

    if (mode === "income")
      return records.reduce((sum, cur) => {
        if (cur.type === "INCOME") return sum + cur.amount;
        return sum;
      }, 0);

    if (mode === "expense")
      return records.reduce((sum, cur) => {
        if (cur.type === "EXPENSE") return sum - cur.amount;
        return sum;
      }, 0);
  };

  console.log(tableHeader);

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="">
          <div className="block">
            <input
              type={"date"}
              max={
                new Date(
                  new Date().getTime() - new Date().getTimezoneOffset() * 60000
                )
                  .toISOString()
                  .split("T")[0]
              }
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              className="border rounded-md px-3 py-1 bg-orange-600 text-white"
              onClick={handleSearchByDate}
            >
              Find by date
            </button>
          </div>
          <button
            className="border rounded-md px-3 py-1 bg-gray-600 text-white"
            onClick={handleSearchToday}
          >
            Find Today's Records
          </button>
          <button
            className="border rounded-md px-3 py-1 bg-indigo-600 text-white"
            onClick={handleSearchAll}
          >
            Get Every Record
          </button>
        </div>
        <div className="flex items-center border mr-5 mt-5 rounded-tl-lg rounded-bl-lg">
          <span className="px-2 py-1 border-r h-full flex items-center justify-center">
            Summary Mode
          </span>
          <select
            className="mx-4"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>
      <h2 className="block mx-auto my-3 text-xl font-semibold max-w-2xl text-center">
        {tableHeader}
      </h2>
      <AllViewTable records={records} />
      <div className="fixed bottom-20 mx-5 flex rounded-tl-md rounded-bl-md">
        <div
          className={`rounded-tl-lg rounded-bl-lg border px-2 py-1 ${
            mode === "all"
              ? "bg-violet-500"
              : mode === "expense"
              ? "bg-red-600"
              : "bg-green-600"
          }`}
        >
          {mode === "all"
            ? "Net Revenue"
            : mode === "income"
            ? "Net Income"
            : "Net Expense"}
        </div>
        <div className="flex items-center content-center px-2 py-1 border-t border-r border-b w-28">
          {getTotal() + "฿"}
        </div>
      </div>
    </>
  );
}

export default HomePage;
