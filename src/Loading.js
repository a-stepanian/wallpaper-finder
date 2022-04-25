import React from "react";

const Loading = () => {
  return (
    <main className="d-flex align-items-center mt-5">
      <strong>Loading...</strong>
      <div
        className="spinner-border ms-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </main>
  );
};

export default Loading;
