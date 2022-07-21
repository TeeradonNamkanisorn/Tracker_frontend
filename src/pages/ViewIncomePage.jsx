import React, { useEffect } from "react";
import ViewTable from "../components/tables/oneType/ViewTable";
import { useRecords } from "../contexts/RecordContext";
import { useUser } from "../contexts/UserContext";

function ViewIncomePage() {
  const { getAllIncomes, incomes } = useRecords();
  const { email } = useUser();

  useEffect(() => {
    if (!email) return;
    getAllIncomes();
  }, [email]);

  return (
    <>
      <h1 className="block mx-auto w-32 text-lg">My Income</h1>

      <ViewTable records={incomes} type="INCOME" />
    </>
  );
}

export default ViewIncomePage;
