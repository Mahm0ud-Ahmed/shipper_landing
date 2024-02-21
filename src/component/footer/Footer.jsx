import Social from "../common/Social";
import Logo from "../../assets/logo.svg";
import Call from "../../assets/call.svg";
import City from "../../assets/city_location.svg";
import Mail from "../../assets/mail.svg";
import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <footer className="footer col-flex">
      <div className="container">
        <div className="address-content row-flex">
          <div className="footer-text">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <p className="h2-m">
              <FormattedMessage id="why_shipper_achievement_title" />
            </p>
          </div>
          <div className="footer-connect-us">
            <h2 className="h2 grd-b">
              <FormattedMessage id="app_bar_contact" />
            </h2>

            <div className="address">
              {addressInfo.map((item, index) => (
                <div key={item.text} className="item row-flex">
                  <img src={item.icon} alt="icon" />
                  {index > 0 ? (
                    <a href={item.text}>
                      {item.text.substring(item.text.indexOf(":") + 1)}
                    </a>
                  ) : (
                    <span>
                      <FormattedMessage id={item.text} />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rights-reserved">
        <div className="container row-flex">
          <p>
            © {new Date().getFullYear()}{" "}
            <FormattedMessage id="footer_copyright" />
          </p>
          <Social />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const addressInfo = [
  { icon: City, text: "footer_country" },
  { icon: Mail, text: "mailto:shipper@shipper.com" },
  { icon: Call, text: "tel:+966506895897" },
];
