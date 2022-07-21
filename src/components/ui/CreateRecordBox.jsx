import React, { useState } from "react";
import { useError } from "../../contexts/ErrorContext";
import { useLoading } from "../../contexts/LoadingContext";
import axios from "../../config/axios";
import { useRecords } from "../../contexts/RecordContext";

function CreateRecordBox({ setShowModal, type }) {
  const { setError } = useError();
  const { setLoading } = useLoading();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const { getAllIncomes, getAllExpenses } = useRecords();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("/record", { title, amount, date, type });
      setShowModal(false);
      setTitle("");
      setAmount(0);
      setDate(new Date());
      if (type === "INCOME") {
        await getAllIncomes();
      } else if (type === "EXPENSE") {
        await getAllExpenses();
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container h-[35vh] w-[70vw]">
      <form className="w-full">
        <div className="flex items-center">
          <label
            htmlFor="recordTitle"
            className=" rounded-md px-3 py-1 w-20  bg-black text-white mx-1"
          >
            Title
          </label>

          <input
            id="recordTitle"
            type={"text"}
            className="border border-black w-[70%] ml-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="py-4 flex">
          <label
            htmlFor="recordAmount"
            className=" rounded-md px-3 py-1 w-20  bg-green-600 text-white mx-1"
          >
            Amount
          </label>
          <input
            type={"number"}
            className="border ml-3"
            id="recordAmount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="flex">
          <label
            htmlFor="recordDate"
            className=" rounded-md px-3 py-1 w-20  bg-blue-600 text-white mx-1"
          >
            Date
          </label>
          <input
            type={"datetime-local"}
            className="border ml-3"
            id="recordDate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            max={new Date()}
          />
        </div>
      </form>
      <div className="flex items-center justify-center p-3  w-[100%] mb-3 mt-20  rounded-b">
        <button
          className="text-white bg-red-600 rounded hover:shadow-lg background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-5 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default CreateRecordBox;
