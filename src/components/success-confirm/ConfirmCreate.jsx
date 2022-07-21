import React from "react";
import { Link } from "react-router-dom";

function ConfirmCreate({ setCompleted, type = "INCOME" }) {
  return (
    <div className="absolute top-40 border  mx-auto max-w-2xl left-0 right-0 text-center font-semibold py-10">
      <span className="px-4 py-2">
        {`You have created an ${type.toLowerCase()} record. You can view the ${type.toLowerCase()} records created`}
        <Link
          to={type === "INCOME" ? "/view-income" : "/view-expense"}
          className={`fond-bold text-xl ${
            type === "INCOME" ? "text-green-700" : "text-red-700"
          }`}
        >
          {" "}
          here.
        </Link>
      </span>
      <h2 className="font-extrabold text-3xl text-center my-5">Or</h2>
      <button
        className={`block mx-auto rounded-md text-white px-3 py-1 ${
          type === "INCOME" ? "bg-lime-500" : "bg-rose-500"
        }`}
        onClick={() => setCompleted(false)}
      >
        {`Create another ${type.toLowerCase()} record`}
      </button>
    </div>
  );
}

export default ConfirmCreate;
