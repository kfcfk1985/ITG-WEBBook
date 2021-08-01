import React from "react";
import {
  Formik, //! 作用类似容器，属性都在这里传递进去。
  Form, //! 相当于form
  Field, //! 相当于input
} from "formik";

const Basic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      // !这就是使用 formik 的招式
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <p>
          {/* //! htmlFor（即：for），用于规定 label 与哪个表单元素绑定。 */}
          <label htmlFor="firstName">First Name</label>

          {/* //!通过 name 与  initialValues 中的数据绑定*/}
          <Field id="firstName" name="firstName" placeholder="Jane" />
        </p>

        <p>
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
        </p>

        <p>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
        </p>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Basic;
