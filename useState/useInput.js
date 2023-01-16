import { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value); // willUpdate에 validator의 결과를 업로드
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.include("@");
  // @를 포함하고 있다면 true를 return @을 포함하고 있지 않다면 업데이트를 하지 않게됨
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hellp</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
};

export default App;
