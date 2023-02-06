import React, { useEffect, useState, useRef } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== "function") {
    // onConfirm 존재하지 않거나 onConfirm 함수가 아닐떄
    return;
  }
  if (!onCancel && typeof onCancel !== "function") {
    // onCancel 존재하지 않거나 onCancel이 함수가 아닐떄
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      // confirm 창을 띄우고 이것이 트루이면 callback
      onConfirm();
    } else {
      onCancel(); // false 이면 rejection
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
