import React, { useEffect, useState } from "react";
import Modal from "../components/common/Modal";
import EditTable from "../components/tables/EditTable";
import CreateRecordBox from "../components/ui/CreateRecordBox";
import { useRecords } from "../contexts/RecordContext";
import { useUser } from "../contexts/UserContext";

function EditExpensePage() {
  const [showModal, setShowModal] = useState(false);
  const { getAllExpenses, expenses } = useRecords();
  const { email } = useUser();

  useEffect(() => {
    if (!email) return;
    getAllExpenses();
  }, [email]);

  return (
    <>
      <h1 className="block mx-auto w-32 text-lg">My Expense</h1>
      <button
        onClick={() => setShowModal((prev) => !prev)}
        className="bg-red-600 text-white rounded-md px-2 py-1"
      >
        Create Expense Record
      </button>
      <EditTable records={expenses} type="EXPENSE" />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Create new expense"
      >
        <CreateRecordBox type="EXPENSE" setShowModal={setShowModal} />
      </Modal>
    </>
  );
}

export default EditExpensePage;
