// src/i18n/i18n-config.js
import enMsg from "../lang/en-US.json";
import arMsg from "../lang/ar-SA.json";

// We'll use the English-USA locale when
// our app loads. It will also be used as
// a fallback when there's a missing
// translation in another locale.
// export const defaultLocale = "en-US";
export const defaultLocale = "ar-SA";

// The locales our app supports. We'll work
// with English-USA and Arabic-Egypt here.
// Feel free to add any locales you want.
export const locales = {
  // English translation message dictionary.
  "en-US": {
    name: "En",
    dir: 'ltr',
    messages: enMsg,
  },
  // Arabic translation message dictionary.
  "ar-SA": {
    name: "عربي",
    dir: 'rtl',
    messages: arMsg,
  },
};
