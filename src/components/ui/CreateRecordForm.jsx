import React from "react";

function CreateRecordForm({
  setTitle,
  setAmount,
  setDate,
  handleSubmit,
  title,
  amount,
  date,
  type = "INCOME",
}) {
  const handleClear = () => {
    setAmount(0);
    setDate("");
    setTitle("");
  };
  return (
    <div
      className={`container block mx-auto h-[35vh] w-[60vw] mt-[10vh] pt-7 px-5 rounded-lg ${
        type === "INCOME" ? "bg-green-300" : "bg-red-300"
      }`}
    >
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
            className="border border-black w-[100%] ml-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="py-4 flex">
          <label
            htmlFor="recordAmount"
            className={
              "rounded-md px-3 py-1 w-20 text-white mx-1 " +
              (type === "INCOME" ? "bg-green-600" : "bg-red-600")
            }
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
      <div className="flex items-center justify-center p-3  w-[100%] mb-3 mt-12  rounded-b">
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default CreateRecordForm;
