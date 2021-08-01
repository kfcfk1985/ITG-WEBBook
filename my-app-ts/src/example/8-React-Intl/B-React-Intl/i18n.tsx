const zh = {
  myMessage: "今天是 {ts, date, ::yyyyMMdd}",
  greeting: "你好, {name}!",
};
const en = {
  myMessage: "Today is {ts, date, ::yyyyMMdd}",
  greeting: "Hello, {name}!",
};

type MessageID = keyof typeof zh;
type Message = Record<MessageID, string>;

export const i18n: { [key: string]: Message } = {
  zh,
  en,
};
