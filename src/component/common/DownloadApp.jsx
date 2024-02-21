import googlePlay from "../../assets/google_play.svg";
import appStore from "../../assets/app_store.svg";
import StoreBtn from "./StoreBtn";
import { FormattedMessage } from "react-intl";

function DownloadApp() {
  return (
    <div className="download-app row-flex">
      <div className="user-app col-flex center">
        <h2>
          <FormattedMessage id="header_welcome_user_app" />
        </h2>
        <div className="download-btn row-flex center">
          <StoreBtn
            icon={googlePlay}
            alt="google play"
            link="https://play.google.com/store/apps/details?id=com.shipperapp.user.app"
          />
          <StoreBtn
            icon={appStore}
            alt="app store"
            link="https://apps.apple.com/us/app/shipper/id6449437473"
          />
        </div>
      </div>
      <div className="driver-app col-flex center">
        <h2>
          <FormattedMessage id="header_welcome_driver_app" />
        </h2>
        <div className="download-btn row-flex center">
          <StoreBtn
            icon={googlePlay}
            alt="google play"
            link="https://play.google.com/store/apps/details?id=com.shipperapp.driver.app"
          />
          <StoreBtn
            icon={appStore}
            alt="app store"
            link="https://apps.apple.com/us/app/shipper-driver/id6456466091"
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
