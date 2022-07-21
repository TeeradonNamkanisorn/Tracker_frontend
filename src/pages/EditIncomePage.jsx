import React, { useEffect, useState } from "react";
import Modal from "../components/common/Modal";
import EditTable from "../components/tables/oneType/EditTable";
import CreateRecordBox from "../components/ui/CreateRecordBox";
import { useRecords } from "../contexts/RecordContext";
import { useUser } from "../contexts/UserContext";

function EditIncomePage() {
  const [showModal, setShowModal] = useState(false);
  const { getAllIncomes, incomes } = useRecords();
  const { email } = useUser();

  useEffect(() => {
    if (!email) return;
    getAllIncomes();
  }, [email]);

  return (
    <>
      <h1 className="block mx-auto w-32 text-lg">My Income</h1>
      <button
        onClick={() => setShowModal((prev) => !prev)}
        className="bg-green-600 text-white rounded-md px-2 py-1"
      >
        Create Income Record
      </button>
      <EditTable type="INCOME" records={incomes} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Create new income"
      >
        <CreateRecordBox setShowModal={setShowModal} type="INCOME" />
      </Modal>
    </>
  );
}

export default EditIncomePage;
