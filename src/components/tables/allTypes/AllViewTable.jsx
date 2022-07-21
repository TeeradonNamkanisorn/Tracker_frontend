import React, { useState } from "react";
import usePagination from "../../../custom_hooks/usePagination";
import PageTab from "../../pagination/PageTab";
import AllViewRow from "./AllViewRow";

function AllViewTable({ records }) {
  let maxExpense = records.reduce((max, cur) => {
    if (max <= cur.amount && cur.type === "EXPENSE") return cur.amount;
    return max;
    //0.000001 for the edge case of division by 0
  }, 0.000000000000000001);
  let maxIncome = records.reduce((max, cur) => {
    if (max <= cur.amount && cur.type === "INCOME") return cur.amount;
    return max;
  }, 0.00000000000000001);

  const recordsWithLevels = records.map((record) => {
    let level = 1;
    if (record.type === "INCOME") {
      //level 1-5
      level = 1 + Math.round((4 * record.amount) / maxIncome);
    } else if (record.type === "EXPENSE") {
      level = 1 + Math.round((4 * record.amount) / maxExpense);
    }
    return { ...record, level };
  });
  const {
    pageNumber,
    page,
    setPage,
    pageGroupNumber,
    setPageGroupNumber,
    pageGroupCount,
    currentRecords,
    pages,
    currentPages,
  } = usePagination(recordsWithLevels, 9, 3);

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentRecords.map((record, index) => {
                    return (
                      <AllViewRow
                        key={record.id}
                        record={record}
                        index={index}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <PageTab
        currentPages={currentPages}
        setPage={setPage}
        setPageGroupNumber={setPageGroupNumber}
        pageGroupNumber={pageGroupNumber}
        pageGroupCount={pageGroupCount}
        page={page}
      />
    </>
  );
}

export default AllViewTable;
