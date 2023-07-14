import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter Program</h1>
      <div>
        <label
          style={{
            padding: "20px",
            fontFamily: "verdana"
          }}
        >
          Counter : {counter}
        </label>
        <button
          style={{
            backgroundColor: "#4169e1",
            borderRadius: "20px",
            height: "30px",
            width: "50%",
            color: "white",
            fontWeight: "bold",
            padding: "5px",
            margin: "10px"
          }}
          onClick={() => {
            setCounter(counter + 1);
            console.log("counter : " + counter);
          }}
        >
          Increment Counter
        </button>
        <button
          style={{
            backgroundColor: "#dc143c ",
            borderRadius: "20px",
            height: "30px",
            width: "50%",
            color: "white",
            fontWeight: "bold",
            padding: "5px",
            marginLeft: "9rem"
          }}
          onClick={() => {
            setCounter(counter - 1);
            console.log("counter : " + counter);
          }}
        >
          Decrement Counter
        </button>
        <button
          style={{
            backgroundColor: "#ffa500",
            borderRadius: "20px",
            height: "30px",
            width: "50%",
            color: "white",
            fontWeight: "bold",
            padding: "5px",
            marginLeft: "9rem",
            marginTop: "0.7rem"
          }}
          onClick={() => {
            setCounter(0);
            console.log("counter : " + counter);
          }}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
}
