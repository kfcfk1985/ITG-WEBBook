function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }

  //!sum    ：是第一个或累计值
  //!current：是第二个或当前值
  return funcs.reduce((sum, current) => {
    console.log("sum", sum, "current", current);
    //!首次 :sum ：f1，       current :f2
    //!第2次:sum ：Function， current :f3

    return (...args) => {
      return sum(current(...args));
    };
  });
}

function f1(arg) {
  console.log("f1", arg);
  return arg;
}
function f2(arg) {
  console.log("f2", arg);
  return arg;
}
function f3(arg) {
  console.log("f3", arg);
  return arg;
}

console.log(compose(f1, f2, f3)("omg12"));
