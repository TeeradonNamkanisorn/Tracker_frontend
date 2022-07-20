import React, { useEffect } from "react";
import ViewTable from "../components/tables/ViewTable";
import { useRecords } from "../contexts/RecordContext";
import { useUser } from "../contexts/UserContext";

function ViewExpensePage() {
  const { getAllExpenses, expenses } = useRecords();
  const { email } = useUser();

  useEffect(() => {
    if (!email) return;
    getAllExpenses();
  }, [email]);

  return <ViewTable type={"EXPENSE"} records={expenses} />;
}

export default ViewExpensePage;
