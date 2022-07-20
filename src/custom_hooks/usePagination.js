import { useState } from "react";

export default function usePagination(
  records,
  recordsPerPage = 5,
  pagesPerTab = 3
) {
  const pageNumber = Math.ceil(records.length / recordsPerPage) || 1;
  const [page, setPage] = useState(1);
  const [pageGroupNumber, setPageGroupNumber] = useState(1);
  const pageGroupCount = Math.ceil(pageNumber / pagesPerTab) || 1;
  const currentRecords = records.slice(
    (page - 1) * recordsPerPage,
    page * recordsPerPage
  );

  let pages = [];
  for (let i = 1; i <= pageNumber; i++) {
    pages.push(i);
  }

  const currentPages = pages.slice(
    (pageGroupNumber - 1) * pagesPerTab,
    pageGroupNumber * pagesPerTab
  );

  return {
    pageNumber,
    page,
    setPage,
    pageGroupNumber,
    setPageGroupNumber,
    pageGroupCount,
    currentRecords,
    pages,
    currentPages,
  };
}
