//创建一个Layout组件，可以传递一个对象进去，并在layout组件中解析。

import Layout from "./Layout";

export default function main(props: any) {
  return (
    <div>
      <Layout showTopBar={true} showBottomBar={true} title="首页">
        {{
          content: <p>HomaPage</p>,
          text: "this is  text",
          btnClick: () => {
            console.log("button click");
          },
        }}
      </Layout>
    </div>
  );
}
