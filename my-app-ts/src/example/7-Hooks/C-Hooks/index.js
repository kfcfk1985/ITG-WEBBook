import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  PureComponent,
  Component,
} from "react";

export default function UseMemoPage(props) {
  let [count, setCount] = useState(0);
  let [value, setValue] = useState("");

  let [type, setType] = useState("");

  const addClick = useCallback(() => {
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
    setValue(event.target.value);
  }
  return (
    <div>
      <h3>UseCallbackPage</h3>
      <button onClick={onClick}>add</button>
      <p>count:{count}</p>

      <input value={value} onInput={onChange} />
      <p>value:{value}</p>

      <Child addClick={addClick} type={type} />
    </div>
  );
}

class Child extends PureComponent {
  // class Child extends Component {
  render() {
    const { addClick, type } = this.props;
    console.log(`Child render,from ${type}`);

    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    );
  }
}

// function Child(props) {
//   const { addClick, type } = props;
//   console.log(`Child render,from ${type}`);

//   return (
//     <div>
//       <h3>Child</h3>
//       <button onClick={() => console.log(addClick())}>add</button>
//     </div>
//   );
// }
