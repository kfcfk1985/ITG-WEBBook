import React, { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("count", count);
      setCount(count + 1);
    }, 1000);
    console.log(
      "//! 定时器只加一次的原因：虽然setInterval函数里面的函数每秒都会执行一次，但是count值始终是初始的0，因为这个函数绑定了第一轮render之后的count值"
    );
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>{count}</h1>;
}
export default Counter;
