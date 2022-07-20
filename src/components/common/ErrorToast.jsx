import React from "react";

function ErrorToast({ error }) {
  return (
    <div
      className="p-3 bg-red-600 rounded-b-lg break-words fixed top-[10%] w-[50%] mx-[25%] rounded-lg text-white "
      style={{ zIndex: 1000 }}
    >
      {error}
    </div>
  );
}

export default ErrorToast;
