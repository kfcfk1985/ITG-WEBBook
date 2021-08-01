import React, { useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

import ShowDate from "./showDate";
import { i18n } from "./i18n";

function Index() {
  const [lang, setLang] = useState("zh");

  console.log("知识点：");
  console.log("1.国际化在JS中的使用");

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

      <button onClick={setLang.bind(null, "zh")}>chinese</button>
      <button onClick={setLang.bind(null, "en")}>English</button>

      <p>
        <ShowDate date={new Date()} />
      </p>
    </IntlProvider>
  );
}

export default Index;
