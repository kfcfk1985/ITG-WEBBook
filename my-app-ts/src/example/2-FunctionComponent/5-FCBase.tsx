import React, { useState, useEffect } from "react";

function FCChild(props: { cnt: number }) {
  let { cnt } = props;
  console.log("FCChild cnt:", cnt);

  useEffect(() => {
    console.log("useEffect cnt:", cnt);
  }, [cnt]);

  function render() {
    console.log("render cnt:", cnt);
    return "render";
  }

  return (
    <div>
      <h3>FCChild</h3>
      <p>{render()}</p>
      <p>{cnt}</p>
    </div>
  );
}

export default function FCBase(props: any) {
  const [cnt, setCnt] = useState(0);

  function click() {
    setCnt(cnt + 1);
  }

  return (
    <div>
      <h3>FCBase</h3>

      <button onClick={click}>click</button>
      <p>{cnt}</p>

      <FCChild cnt={cnt}></FCChild>
    </div>
  );
}

// let cnt = 0;
// export default function FCBase(props: any) {
//   console.log("FCBase");

//   function click() {
//     cnt = cnt + 1; //! 这种方式改变cnt，FCBase 不会重新执行
//   }

//   return (
//     <div>
//       <h3>FCBase</h3>

//       <button onClick={click}>click</button>
//       <p>{cnt}</p>

//       <FCChild cnt={cnt}></FCChild>
//     </div>
//   );
// }
