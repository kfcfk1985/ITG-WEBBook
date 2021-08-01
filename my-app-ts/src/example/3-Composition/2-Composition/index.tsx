import { DefaultProps, IBtnItem, FormbuttonProps } from "./index.d";

function Card(props: DefaultProps) {
  const { title, children } = props;
  return (
    <div>
      <p>{title}</p> {/* //! 使用父传递给子的参数 */}
      <h6>{children}</h6> {/* //! 相当于vue中的默认插槽 */}
    </div>
  );
}

function Formbutton(props: FormbuttonProps) {
  return (
    <div className="Formbutton">
      <button onClick={props.children.defaultBtns.searchClick}>默认查询</button>

      <button onClick={props.children.defaultBtns.resetClick}>默认重置</button>

      {props.children.btns.map((item: IBtnItem, index: number) => {
        return (
          <button key={"btn" + index} onClick={item.onClick}>
            {item.title}
          </button>
        );
      })}
    </div>
  );
}

export default function main(props: DefaultProps) {
  return (
    <div>
      <Card title="通过参数传递进去的信息">
        <p>我是内容</p>
      </Card>

      <Formbutton>
        {{
          defaultBtns: {
            searchClick: () => console.log("默认查询"),
            resetClick: () => console.log("默认重置"),
          },
          btns: [
            {
              title: "查询",
              onClick: () => console.log("查询"),
            },
            {
              title: "重置",
              onClick: () => console.log("重置"),
            },
          ],
        }}
      </Formbutton>
    </div>
  );
}
