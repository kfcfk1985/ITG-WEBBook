import React from "react";
import { useIntl, FormattedDate, defineMessages } from "react-intl";

function useMsg() {
  const intl = useIntl();

  const messages = defineMessages({
    greeting: {
      id: "greeting",
      //   defaultMessage: "Hello, {name}!",
      //   description: "Greeting to welcome the user to the app",
    },
  });

  //! 国际化在JS中的使用
  return intl.formatMessage(messages.greeting, { name: "tony" });
}

const FunctionComponent: React.FC<{ date: number | Date }> = ({ date }) => {
  const intl = useIntl();
  return (
    <>
      {/* //! js的使用方式比html的使用方式，单词上少了ted  */}
      <p title={intl.formatDate(date)}>
        <FormattedDate value={date} />
      </p>
      <p>{useMsg()}</p>
    </>
  );
};

export default FunctionComponent;
