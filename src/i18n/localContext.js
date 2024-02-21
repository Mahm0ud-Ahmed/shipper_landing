import { createContext } from "react";
import { defaultLocale } from "./i18n-config";

export const LocalContext = createContext({
  locale: defaultLocale,
  setLocale: () => {},
});
