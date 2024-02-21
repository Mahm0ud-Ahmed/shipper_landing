import { IntlProvider } from "react-intl";
import { defaultLocale, locales } from "./i18n-config";
import { LocalContext } from "./localContext";
import { useState } from "react";

function I18n(props) {
  const [locale, setLocale] = useState(defaultLocale);
  return (
    <LocalContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        defaultLocale={locale}
        messages={locales[locale].messages}
      >
        {props.children}
      </IntlProvider>
    </LocalContext.Provider>
  );
}

export default I18n;
