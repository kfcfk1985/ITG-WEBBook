import React, { useState, useEffect } from "react";

function FCChild(props: any) {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    console.log("useEffect cnt:", cnt);
    return () => {
      console.log("componentWillUnmount");
    };
  }); //!若没有指定依赖deps，将在界面首次渲染结束后执行effect，清理函数不会执行；（若界面多次发生渲染，就会多次执行effect，在effect执行前，会先执行清理函数）；清理函数在组件卸载时也会执行。

  function click() {
    setCnt(cnt + 1);
  }

  return (
    <div>
      <h3>FCChild</h3>
      <button onClick={click}>Add</button>
      <p>{cnt}</p>
    </div>
  );
}

export default function FCBase(props: any) {
  const [show, setShow] = useState(false);

  function click() {
    setShow(!show);
  }

  return (
    <div>
      <h3>FCBase</h3>

      <button onClick={click}>{show === true ? "Hide" : "Show"}</button>

      {show && <FCChild />}
    </div>
  );
}
