import React, { useState, useEffect } from "react";

export default function FCBase(props: any) {
  const [stateCnt, setCnt] = useState(0);
  let normalCnt = 0;

  useEffect(() => {
    console.log("Statecnt:", stateCnt); //! 一旦 stateCnt 发生变化，就执行
  }, [stateCnt]); //! 依赖deps[ ]中指定的变量，必须是由useState（）创建或由props 传递进来

  useEffect(() => {
    console.log("normalCnt:", normalCnt); //! 即使 normalCnt发生变化，也仅仅执行一次（在界面渲染后执行一次）
  }, [normalCnt]);

  function click() {
    setCnt(stateCnt + 1);
    normalCnt += 1;
  }

  return (
    <div>
      <h3>FCBase</h3>

      <button onClick={click}>click</button>
      <p>{stateCnt}</p>
    </div>
  );
}
