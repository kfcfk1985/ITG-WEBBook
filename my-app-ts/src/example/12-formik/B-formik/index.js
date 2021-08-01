import React from "react";
import { useFormik } from "formik";

export default function App() {
  const formik = useFormik({
    initialValues: { username: "jem", password: "123" },
    onSubmit: (value) => {
      console.log("onSubmit", value);
    },
    //!用于数据校验
    validate: (values) => {
      console.log("validate", values);
      const errors = {};
      if (!values.username) {
        errors.username = "请输入用户名";
      }
      if (!values.password) {
        errors.password = "请输入密码";
      }
      return errors;
    },
  });

  console.log("知识点：https://zhuanlan.zhihu.com/p/373128049");
  console.log("1.formik的表单验证");

  return (
    //! formik.handleSubmit回调先调用 validate(),然后再调用 onSubmit()
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange} // !原理：其实 formik.handleXXX 这些函数都会调用  validate()
        onBlur={formik.handleBlur} // !开启离开焦点时触发验证(原理：其实 formik.handleXXX 这些函数都会调用  validate())
      />

      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <input type="submit" />

      {/* //!显示错误的信息 */}
      <p style={{ color: "red" }}>{formik.errors.username || null}</p>
      <p style={{ color: "red" }}>{formik.errors.password || null}</p>

      {/* //! 检查表单元素的值是否被改动过       */}
      <p>username 是否被改过:{formik.touched.username ? "是" : "否"}</p>
      <p>password 是否被改过:{formik.touched.password ? "是" : "否"}</p>
    </form>
  );
}
