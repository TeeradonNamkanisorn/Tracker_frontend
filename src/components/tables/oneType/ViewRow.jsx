import React from "react";

function ViewRow({ record, index, type }) {
  const colorClassName = () => {
    if (type === "INCOME") {
      if (index % 2 === 0) {
        return "bg-green-400";
      } else {
        return "bg-green-200";
      }
    } else if (type === "EXPENSE") {
      if (index % 2 === 0) {
        return "bg-red-400";
      } else {
        return "bg-red-200";
      }
    }
    return "";
  };

  return (
    <tr className={"border-b relative " + colorClassName()}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {record.title}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {record.amount}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {record.date.slice(0, record.date.length - 3)}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap relative">
        {record.type}
      </td>
    </tr>
  );
}

export default ViewRow;
