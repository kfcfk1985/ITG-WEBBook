export enum ActionType {
  ADD1 = "ADD1",
  ADD2 = "ADD2",
  CUT1 = "CUT1",
  CUT2 = "CUT2",
}

export interface Action {
  type: ActionType;
  num?: number;
}

export interface State {
  num: number;
}

export interface FinalState<T> {
  count1: T;
  count2: T;
}
