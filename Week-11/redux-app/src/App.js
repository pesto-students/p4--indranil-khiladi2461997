import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset, increment } from "./feature/slice";
import "./App.css";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <span>{`You have walked ${count} steps today`}</span>
      <button onClick={() => dispatch(increment())} className="addBtn">
        {" "}
        Add a step{" "}
      </button>
      <button onClick={() => dispatch(reset())} className="resetBtn">
        Reset Steps
      </button>
    </div>
  );
}

export default App;
