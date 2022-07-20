import React from "react";

function AllViewRow({ record, index }) {
  const type = record.type;
  let level = record.level;

  const colorLevel = {
    red1: "#fee2e2",
    red2: "#fecaca",
    red3: "#fca5a5",
    red4: "#f87171",
    red5: "#ef4444",
    red6: "#dc2626",
    red7: "#b91c1c",
    red8: "#991b1b",

    green1: "#dcfce7",
    green2: "#bbf7d0",
    green3: "#86efac",
    green4: "#4ade80",
    green5: "#22c55e",
    green6: "#16a34a",
    green7: "#15803d",
    green8: "#166534",
  };

  const color =
    type === "INCOME"
      ? colorLevel["green" + level]
      : type === "EXPENSE"
      ? colorLevel["red" + level]
      : "white";

  return (
    <tr className={"border-b relative "} style={{ backgroundColor: color }}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {record.title}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {record.amount}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {record.date}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap relative">
        {record.type}
      </td>
    </tr>
  );
}

export default AllViewRow;
