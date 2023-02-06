import React, { useEffect, useState, useRef } from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.addEventListener("beforeunload", listener);
  // before unload 는 윈도우가 닫히기전에 함수를 한번 실행시켜주는것을 허락함
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>{" "}
      {/*protect 를 안누르고
      창을 닫으면 아무것도 안뜨지만 protect를 누르고 창을 닫기 누르면 정말로
      나가시겠습니까? 라고 한번 물어본다*/}
      <button onClick={disablePrevent}>Unprotect</button>
      {/*protect를 누르고 Unprotect를 누르면 창 닫기 확인 알림 문자가 안뜬다*/}
    </div>
  );
};

export default App;
