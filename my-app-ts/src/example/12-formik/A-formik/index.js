import React from "react";
import { useFormik } from "formik";

export default function App() {
  const formik = useFormik({
    initialValues: { username: "jem", password: "123" },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  console.log("知识点：");
  console.log(
    "1.formik的基本使用:useFormik：是一个hooks，一般结合原生的 form,input等标签使用"
  );

  return (
    // ! useFormik 返回的对象带有  handleSubmit 方法：指向调用 useFormik()时传递的 onSubmit 方法。
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        value={formik.values.username} //! useFormik 返回的对象带有  values 对象
        onChange={formik.handleChange}
      />

      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <input type="submit" />
    </form>
  );
}
