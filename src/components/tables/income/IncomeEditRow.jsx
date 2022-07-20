import React, { useState } from "react";
import { formattedInputDateTime } from "../../../services/dateTime";
import axios from "../../../config/axios";
import { useError } from "../../../contexts/ErrorContext";
import { useLoading } from "../../../contexts/LoadingContext";
import { useRecords } from "../../../contexts/RecordContext";

function IncomeEditRow({ record, index }) {
  const formattedInputDate = formattedInputDateTime(record.date);
  const { getAllIncomes } = useRecords();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(record?.title);
  const [newAmount, setNewAmount] = useState(record?.amount);
  const [newDate, setNewDate] = useState(formattedInputDate);
  const { setError } = useError();
  const { setLoading } = useLoading();

  const handleUpdate = async (e) => {
    try {
      setLoading(true);
      const body = { title: newTitle, amount: +newAmount, date: newDate };

      await axios.put("/record/" + record.id, body);
      setIsEditing(false);
      await getAllIncomes();
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <tr
        className={
          "border-b relative " +
          (index % 2 === 0 ? " bg-green-400" : "bg-green-200")
        }
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {!isEditing ? (
            record.title
          ) : (
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              type={"text"}
            />
          )}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {!isEditing ? (
            record.amount + " ฿"
          ) : (
            <input
              type={"number"}
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
            />
          )}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {!isEditing ? (
            record.date
          ) : (
            <input
              type={"datetime-local"}
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
          )}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap relative">
          {record.type}
        </td>
        <td className="text-sm text-gray-900 font-light pl-6 pr-6 w-48 py-4 whitespace-nowrap">
          {!isEditing ? (
            <div className="">
              <button onClick={() => setIsEditing(true)}>
                <i className="fa-solid fa-pen-to-square fa-lg"></i>
              </button>
              <button onClick={() => {}}>
                <i className="fa-solid fa-trash fa-lg mx-6"></i>
              </button>
            </div>
          ) : (
            <div className="flex">
              <button
                className=" flex items-center px-2 py-1 bg-blue-500 rounded-sm mr-1 text-white"
                onClick={handleUpdate}
              >
                <i className="fa-solid fa-circle-check fa-lg mr-2 "></i>
                Save
              </button>
              <button
                className=" flex items-center px-2 py-1 bg-red-500 rounded-sm text-white"
                onClick={() => setIsEditing(false)}
              >
                <i className="fa-solid fa-xmark fa-lg mr-2 "></i>
                Cancel
              </button>
            </div>
          )}
        </td>
      </tr>
    </>
  );
}

export default IncomeEditRow;
