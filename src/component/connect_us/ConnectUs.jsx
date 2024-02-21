import DownloadApp from "../common/DownloadApp";

import Mobile from "../../assets/mobile.png";
import Social from "../common/Social";
import { FormattedMessage, useIntl } from "react-intl";

function ConnectUs() {
  const { formatMessage } = useIntl();
  return (
    <section className="connect-us" id="connect-us">
      <div className="container">
        <div className="connect row-flex">
          <div className="connect-content">
            <h2 className="h2 grd-b">
              <FormattedMessage id="app_bar_contact" />
            </h2>
            <div className="msg">
              <p className="h2-m">
                <FormattedMessage id="contact_us_any_question" />
              </p>
              <p className="h2-m">
                <FormattedMessage id="contact_us_contact_now" />
              </p>
            </div>
            <Social />
          </div>

          <form type="submit" method="post" className="connect-form col-flex">
            <div className="user-info row-flex">
              <input
                type="text"
                name="user_name"
                id=""
                placeholder={formatMessage({
                  id: "contact_us_input_hint_name",
                })}
              />
              <input
                type="text"
                name="phone_number"
                id=""
                placeholder={formatMessage({
                  id: "contact_us_input_hint_phone",
                })}
              />
            </div>
            <textarea
              name="note"
              id=""
              cols="30"
              rows="10"
              placeholder={formatMessage({
                id: "contact_us_input_hint_area",
              })}
            ></textarea>
            <button className="btn-mark" type="submit">
              <FormattedMessage id="button_send_title" />
            </button>
          </form>
        </div>

        <div className="store-app row-flex">
          <div className="download-content">
            <h2 className="h2">
              <FormattedMessage id="contact_us_download_apps" />
            </h2>
            <p className="h2-m">
              <FormattedMessage id="contact_us_lorem" />
            </p>
            <DownloadApp />
          </div>
          <div className="mobile">
            <img src={Mobile} alt="mobile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectUs;
