import React, { useState } from "react";
import { useError } from "../contexts/ErrorContext";
import { useLoading } from "../contexts/LoadingContext";
import axios from "../config/axios";
import CreateRecordForm from "../components/ui/CreateRecordForm";
import ConfirmCreate from "../components/success-confirm/ConfirmCreate";

function CreateExpensePage() {
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
      await axios.post("/record", { title, amount, date, type: "EXPENSE" });
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
        type="EXPENSE"
      />{" "}
    </>
  ) : (
    <ConfirmCreate type="EXPENSE" setCompleted={setCompleted} />
  );
}

export default CreateExpensePage;
