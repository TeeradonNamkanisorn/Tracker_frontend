import React, { useEffect, useState } from "react";
import AllViewTable from "../components/tables/AllViewTable";
import { useError } from "../contexts/ErrorContext";
import { useLoading } from "../contexts/LoadingContext";
import { useRecords } from "../contexts/RecordContext";

function HomePage() {
  const { records, getRecords } = useRecords();
  const [date, setDate] = useState("");
  const { setError } = useError();
  const { setLoading } = useLoading();

  console.log(records);
  useEffect(() => {
    getRecords({ today: true });
  }, []);

  const handleSearchByDate = async () => {
    try {
      if (!date) return setError("You must specify a date to search by date");
      setLoading(true);
      await getRecords({ date });
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex">
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
      <AllViewTable records={records} />
    </>
  );
}

export default HomePage;
