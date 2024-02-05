import googlePlay from "../../assets/google_play.svg";
import appStore from "../../assets/app_store.svg";

function DownloadApp() {
  return (
    <div className="download-app row-flex">
          <div className="user-app col-flex center">
            <h2>تطبيق المستخدم</h2>
            <div className="download-btn row-flex center">
              <button>
                <img src={googlePlay} alt="google play" />
              </button>
              <button>
                <img src={appStore} alt="app store" />
              </button>
            </div>
          </div>
          <div className="driver-app col-flex center">
            <h2>تطبيق الكابتن</h2>
            <div className="download-btn row-flex center">
              <button>
                <img src={googlePlay} alt="google play" />
              </button>
              <button>
                <img src={appStore} alt="app store" />
              </button>
            </div>
          </div>
        </div>
  )
}

export default DownloadApp