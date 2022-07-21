import React from "react";

function PageTab({
  currentPages,
  page,
  setPage,
  setPageGroupNumber,
  pageGroupNumber,
  pageGroupCount,
}) {
  console.log(pageGroupCount, pageGroupNumber);
  return (
    <>
      <div className="flex items-center justify-center space-x-1 mx-auto absolute bottom-5 right-0 left-0">
        <button
          className={
            "px-4 py-2 text-gray-500 bg-gray-300 rounded-md " +
            (pageGroupNumber === 1
              ? "font-normal"
              : "hover:bg-blue-400 hover:text-white font-bold")
          }
          disabled={pageGroupNumber === 1}
          onClick={() => setPageGroupNumber((prev) => prev - 1)}
        >
          Previous
        </button>

        {currentPages.map((num) => {
          return (
            <button
              className={`px-4 py-2 rounded-md hover:bg-blue-400 hover:text-white ${
                page === num
                  ? "text-white bg-gray-600"
                  : "text-gray-700 bg-gray-200"
              }`}
              key={num}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          );
        })}
        <button
          className={
            "px-4 py-2 text-gray-500 bg-gray-300 rounded-md " +
            (pageGroupCount <= pageGroupNumber
              ? "font-normal"
              : "hover:bg-blue-400 hover:text-white font-bold")
          }
          onClick={() => {
            setPageGroupNumber((prev) => prev + 1);
          }}
          disabled={pageGroupCount <= pageGroupNumber}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default PageTab;
