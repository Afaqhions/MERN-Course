import { useState } from "react";

function App() {
  // State
  const [fruit, setFruit] = useState("Apple");

  let handleFruit = () => {
    setFruit("Banana");
  };

  let callFun = () => {
    alert("Hello, World!");
  };

  let fruits = (name) => {
    alert(name);
  };

  // Counter App
  const [count, setCount] = useState(0);

  // Toggle
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={callFun}>App</button>
      <button onClick={() => fruits("Apple")}>Apple</button>
      <button onClick={() => fruits("Orange")}>Orange</button>

      <h1>State</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change Fruit</button>

      {/* Counter App */}
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Toggle */}
      {open ? (
        <>
          <button
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </button>
          <h3>Hello</h3>
        </>
      ) : (
        <button onClick={() => setOpen(true)}>|||</button>
      )}
    </div>
  );
}

export default App;
