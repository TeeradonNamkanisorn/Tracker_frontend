import React, { useState } from "react";
import CreateRecordForm from "../components/ui/CreateRecordForm";
import { useError } from "../contexts/ErrorContext";
import { useLoading } from "../contexts/LoadingContext";
import axios from "axios";
import { Link } from "react-router-dom";

function CreateIncomePage() {
  //   const isoStr = new Date().toISOString();
  //   const initialDateValue = isoStr.substring(0, isoStr.length - 8);
  const [completed, setCompleted] = useState(false);
  const { setError } = useError();
  const { setLoading } = useLoading();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("/record", { title, amount, date, type: "INCOME" });
      setTitle("");
      setAmount(0);
      setDate("");
      setCompleted(true);
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return !completed ? (
    <>
      <h1 className="font-semibold block mx-auto w-40 absolut mt-24 text-2xl">
        Create Income
      </h1>
      <CreateRecordForm
        amount={amount}
        setAmount={setAmount}
        date={date}
        setDate={setDate}
        title={title}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
        type="INCOME"
      />{" "}
    </>
  ) : (
    <div className="absolute top-40 border  mx-auto max-w-2xl left-0 right-0 text-center font-semibold py-10">
      <span className="px-4 py-2">
        You have created an income record. You can view the income records
        created
        <Link to="/view-income" className="text-green-700 fond-bold text-xl">
          {" "}
          here.
        </Link>
      </span>
      <h2 className="font-extrabold text-3xl text-center my-5">Or</h2>
      <button
        className="bg-lime-500 block mx-auto rounded-md text-white px-3 py-1 "
        onClick={() => setCompleted(false)}
      >
        Create Another Income Record
      </button>
    </div>
  );
}

export default CreateIncomePage;
