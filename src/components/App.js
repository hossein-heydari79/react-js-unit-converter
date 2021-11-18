import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(1);
  const [num, setNum] = useState("");

  function onChange(e) {

    if (e.target.id == "From-select") {
      setFrom(e.target.value);
    }
    else if (e.target.id == "To-select") {
      setTo(e.target.value);
    }

    else {
      setNum(e.target.value);
    }

  }


  function click() {

    if (num === "") {
      setResult(0)
    }
    else {
      if (from === to) {
        setResult(num);
      }
      else {
        setResult(parseFloat(num) * (parseFloat(from) / parseFloat(to)));
      }
    }

  }

  return (
    <>
      <div className="converter-form">

        <Input label={"Amount"} onChange={onChange} />

        <div className="row">

          <Select label="From" items={units} onChange={onChange} />

          <Select label="To" items={units} onChange={onChange} />

          <button onClick={click}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
