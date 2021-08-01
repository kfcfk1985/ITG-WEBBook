import React, { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const i18n = {
  fr: {
    myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
  },
  en: {
    myMessage: "Today is {ts, date, ::yyyyMMdd}",
  },
};

function Index() {
  const [lang, setLang] = useState("fr");

  console.log("知识点：");
  console.log("1.国际化在页面中的使用");

  return (
    <IntlProvider messages={i18n[lang]} locale={lang} defaultLocale="en">
      <p>
        <FormattedMessage
          id="myMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ ts: Date.now() }}
        />
        <br />
        {/* <FormattedNumber value={19} style="currency" currency="EUR" /> */}
      </p>

      <button onClick={setLang.bind(null, "fr")}>French</button>
      <button onClick={setLang.bind(null, "en")}>English</button>
    </IntlProvider>
  );
}

export default Index;
