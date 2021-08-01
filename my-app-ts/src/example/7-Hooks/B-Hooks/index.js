import React, { useState, useEffect, useMemo } from "react";

export default function UseMemoPage(props) {
  let [count, setCount] = useState(0);
  let [valueMsg, setValueMsg] = useState("");

  let [type, setType] = useState("");

  const expensive = useMemo(() => {
    console.log(`computed,from ${type}`);
    let sum = [];
    for (let i = 0; i <= count; i++) {
      sum.push(i);
    }
    return sum.join(",");
  }, [count]);

  function onClick() {
    setType("onClick");
    setCount(count + 1);
  }

  function onChange(event) {
    setType("onChange");
    setValueMsg(event.target.value);
  }

  return (
    <div>
      <h3>UseMemoPage</h3>

      <button onClick={onClick}>add</button>
      <p>count:{count}</p>
      <p>expensive:{expensive}</p>

      <input value={valueMsg} onInput={onChange} />
      <p>valueMsg:{valueMsg}</p>
    </div>
  );
}
