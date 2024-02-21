import logo from "../../assets/logo.svg";
import lang from "../../assets/language.svg";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { LocalContext } from "../../i18n/localContext";
import { locales } from "../../i18n/i18n-config";

function AppBar() {
  const { locale, setLocale } = useContext(LocalContext);
  let targetLang = {
    code: locale === "en-US" ? "ar-SA" : "en-US",
    name: locale === "en-US" ? locales["ar-SA"].name : locales["en-US"].name,
  };

  return (
    <div className="app-bar container row-flex">
      <div className="logo">
        <a href="#welcome-shipper">
          <img src={logo} alt="shipper-logo" />
        </a>
      </div>

      <div className="links row-flex center">
        <nav>
          <ul className="row-flex">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={`#${link.id}`}>
                  <FormattedMessage id={link.title} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="actions row-flex center">
          <button
            className="lang row-flex center"
            onClick={() => setLocale(targetLang.code)}
          >
            <img src={lang} alt="language" /> {targetLang.name}
          </button>
          <button className="connect btn-mark">
            <FormattedMessage id="app_bar_contact" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;

let navLinks = [
  { title: "app_bar_home", id: "welcome-shipper" },
  { title: "app_bar_why", id: "why-shipper" },
  { title: "app_bar_our_us", id: "our-us" },
  { title: "app_bar_services", id: "services" },
  { title: "app_bar_contact", id: "connect-us" },
];
