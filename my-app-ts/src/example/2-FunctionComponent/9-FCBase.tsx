import React, { useState, useEffect } from "react";

function FCChild(props: any) {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    console.log("useEffect cnt:", cnt);
    return () => {
      console.log("componentWillUnmount");
    };
  }, [cnt]); //!若依赖deps[ ]中存放某个变量，将在界面首次渲染结束后执行effect，则该变量一旦发生变化，effect就执行一次，在effect执行前，会先执行清理函数；清理函数在组件卸载时也会执行。

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
