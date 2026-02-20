import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // console.log("hellooo")
    document.title = `You clicked ${count} times`
  },[count])

  const countIncrement = () => {
    setCount(count + 1);
  };

  const countDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div>
        <h1>count : {count}</h1>
        <button onClick={() => countIncrement()}>Increment</button>
        {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
        <button onClick={() => countDecrement()}>Decrement</button>
      </div>
      <br />

      <input type="text" placeholder="type something" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <p>you typed : {inputValue}</p>
    </>
  );
}

export default App;
