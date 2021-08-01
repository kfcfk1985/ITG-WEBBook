import React, { useState, useEffect } from "react";

function FCChild(props: any) {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    console.log("useEffect cnt:");
    return () => {
      console.log("componentWillUnmount");
    };
  }, []); //!若依赖deps为[ ]，将在界面首次渲染结束后执行effect（只执行一次），清理函数仅仅在组件卸载时才会执行。

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
