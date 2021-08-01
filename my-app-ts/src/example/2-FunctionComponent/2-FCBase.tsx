import React, { useState, useEffect } from "react";

export default function FCBase(props: any) {
  const [date, setDate] = useState(new Date());
  const [cnt, setCnt] = useState(0); //! 若需要创建多个变量，则调用useState（）多次

  useEffect(() => {
    console.log("useEffect:date");
    const timer = setInterval(() => {
      setDate(new Date()); //! setXXX()的调用会导致组件(即:下面return 的部分)重新渲染
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    console.log("useEffect:cnt:", cnt);
  }, [cnt]);

  function sayHello() {
    console.log("sayHello");
    return "sayHello";
  }

  function click() {
    setCnt(cnt + 1);
  }

  return (
    <div>
      <h3>FCBase</h3>

      <p>{sayHello()}</p>
      <p>{date.toLocaleTimeString()}</p>

      <button onClick={click}>click</button>
      <p>{cnt}</p>
    </div>
  );
}
