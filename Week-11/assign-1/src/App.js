import { useSelector } from "react-redux";
import "./App.css";
import { toggle } from "./feature/createLight";
import { useDispatch } from "react-redux";

function App() {
  const light = useSelector((state) => state.light.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {light === true ? "ON" : "OFF"}
      <button onClick={() => dispatch(toggle())}>Action</button>
    </div>
  );
}

export default App;
