import React, { useEffect, useState, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      // 마우스가 위로 벗어날때만 pls dont leave 를 띄움
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    // 윈도우 창에서 마우스가 document 를 벗어났을때 handle 함수를 실행시킴
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
