export interface DefaultProps {
  title?: string;
  children?: React.ReactNode;
}

export interface IBtnItem {
  title: string;
  onClick(): void; //! 对象类型字面量 + 方法签名
  // onClick: { (): void };     //! 对象类型字面量 + 属性签名 + 函数类型(本质是：对象类型字面量 + 调用签名)
  // onClick: () => void;    //! 对象类型字面量 + 属性签名 + 函数类型字面量
}
export interface IBtnObj<T> {
  defaultBtns: {
    searchClick(): void;
    resetClick(): void;
  };
  btns: T[];
}

export interface FormbuttonProps {
  children: IBtnObj<IBtnItem>;
}
