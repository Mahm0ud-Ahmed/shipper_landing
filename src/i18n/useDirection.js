import { useEffect } from "react";
import { useIntl } from "react-intl";
import { locales } from "./i18n-config";

export default function useDirection() {
  const local = useIntl();

  useEffect(() => {
    document.dir = locales[local.locale].dir;
    document.title = local.formatMessage({ id: "app_title" });
  }, [local]);
}
