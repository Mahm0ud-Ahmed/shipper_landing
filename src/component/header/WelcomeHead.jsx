import { FormattedMessage, useIntl } from "react-intl";
import welcomeImg from "../../assets/welcome_header.svg";
import DownloadApp from "../common/DownloadApp";
function WelcomeHead() {
  const { locale } = useIntl();
  return (
    <div className="welcome-head container row-flex center">
      <div className="welcome-content">
        <div className="welcome-msg">
          <h1 className="h1">
            {locale === "en-US" ? (
              <>
                <span>
                  <FormattedMessage id="header_welcome_title_1" />
                </span>
                <FormattedMessage id="header_welcome_title_2" />
                <span>
                  <FormattedMessage id="header_welcome_title_3" />
                </span>
                <FormattedMessage id="header_welcome_title_4" />
                <br />
                <FormattedMessage id="header_welcome_title_5" />
              </>
            ) : (
              <>
                <FormattedMessage id="header_welcome_title_1" />
                <span>
                  <FormattedMessage id="header_welcome_title_2" />
                </span>
                <FormattedMessage id="header_welcome_title_3" />
                <span>
                  <FormattedMessage id="header_welcome_title_4" />
                </span>
                <br />
                <FormattedMessage id="header_welcome_title_5" />
              </>
            )}
          </h1>
      <h2><FormattedMessage id="header_welcome_subtitle" /></h2>
        </div>
        <DownloadApp />
      </div>

      <div className="welcome-img">
        <img src={welcomeImg} alt="welcome" />
      </div>
    </div>
  );
}

export default WelcomeHead;
