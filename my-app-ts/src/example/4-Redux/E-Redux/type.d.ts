export enum AgeActionType {
  ADD = "ADD", //! 注意：这里建议通过等号 赋值某个字符串，若用默认值，则每个枚举类型都是从0开始。在多个 reducer 中，可能会发生多个 reducer 调用的问题
  SUB = "SUB",
}

export enum NameActionType {
  SET = "SET",
}

export interface Action<T> {
  type: T;
}

export interface NameAction<T> extends Action<T> {
  name: string;
}

export interface State {
  name: string;
  age: number;
}
