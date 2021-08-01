import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage, //! 用于输出错误信息
} from "formik";
import * as Yup from "yup";

export default function App() {
  const initialValues = { username: "", subject: "" };
  const handleSubmit = (value) => {
    console.log(value);
  };

  // !这就是使用 Yup 的招式
  const validationSchema = Yup.object({
    username: Yup.string()
      .max(10, "max length 10")
      .required("must input your username"),
    subject: Yup.string().required("must select subject username"),
  });

  console.log("知识点：https://zhuanlan.zhihu.com/p/373128049");
  console.log("1.使用yup验证");

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema} //!使用yup验证
    >
      <Form>
        <div>
          <Field name="username" />

          <p>
            {/* //!通过name 与  initialValues中的数据绑定*/}
            <ErrorMessage name="username" />
          </p>
        </div>

        <div>
          {/*//! 默认情况下，Field 组件渲染的是文本框(即：默认带有 as="textarea" )，如果要生成其他元素可以使用以下语法 */}
          <Field name="subject" as="select">
            <option value=""></option>
            <option value="apple">apple</option>
            <option value="banana">banana</option>
          </Field>
          <p>
            <ErrorMessage name="subject" />
          </p>
        </div>

        <p>
          {/* //! 提交按钮 */}
          <input type="submit" />
        </p>
      </Form>
    </Formik>
  );
}
