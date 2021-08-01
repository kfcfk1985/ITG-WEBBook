import React from "react";
import {
  useField,
  Form,
  FormikProps,
  Formik,
  FieldConfig,
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
} from "formik";

import * as Yup from "yup";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
//!注意这里又构造赋值，又剩余参数的类型！！！哥可是用了很久才把这个类型写出来
const MyTextField = ({ label, ...props }: FieldConfig & { label: string }) => {
  console.log("MyTextField:", props); //!{name: "xxx", type: "yyy"}

  const [field, meta, helpers]: [
    // !这里把类型加上，是为了方便查看类型中的属性和函数
    FieldInputProps<any>,
    FieldMetaProps<any>,
    FieldHelperProps<any>
  ] = useField(props);

  // console.log("meta:", meta);
  return (
    <>
      <div>
        <label>
          {label}
          <input {...field} {...props} />
        </label>

        {meta.touched && //! Whether the field has been visited(一旦按下 提交按钮，当然被访问过啦)
        meta.error ? (
          <div className="error" style={{ color: "red" }}>
            {meta.error}
          </div>
        ) : null}
      </div>
    </>
  );
};

const Example = () => {
  console.log(
    "知识点：https://zhuanlan.zhihu.com/p/373128049         https://formik.org/docs/api/useField#example "
  );

  console.log("1.使用useField构建自定义表单控件");

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(10, "max length 10")
      .required("must input your firstName"),
    lastName: Yup.string()
      .max(10, "max length 10")
      .required("must input your lastName"),
    email: Yup.string()
      .max(10, "max length 10")
      .required("must input your email"),
  });

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false); //!Manually set isSubmitting
          }, 1000);
        }}
        validationSchema={validationSchema}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <MyTextField name="firstName" type="text" label="First Name" />
            <MyTextField name="lastName" type="text" label="Last Name" />
            <MyTextField name="email" type="email" label="Email" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Example;
