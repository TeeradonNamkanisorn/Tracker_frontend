import React, { useState } from "react";
import usePagination from "../../../custom_hooks/usePagination";
import PageTab from "../../pagination/PageTab";
import ViewRow from "./ViewRow";

function ViewTable({ records, type }) {
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
  } = usePagination(records, 4, 3);

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
                      <ViewRow
                        key={record.id}
                        record={record}
                        index={index}
                        type={type}
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
      />
    </>
  );
}

export default ViewTable;
