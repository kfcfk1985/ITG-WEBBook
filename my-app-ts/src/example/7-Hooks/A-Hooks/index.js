import React, { useState, useEffect } from "react";

export default function HookPage(props) {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let str = `第${count}次点击`;
    console.log(str);
    document.title = str;
  }, [count]);

  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <p>{useClock().toLocaleTimeString()}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
}

function useClock() {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("useEffect");
    let timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return date;
}
