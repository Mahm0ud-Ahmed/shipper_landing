import googlePlay from "../../assets/google_play.svg";
import appStore from "../../assets/app_store.svg";
import welcomeImg from "../../assets/welcome_header.svg";
function WelcomeHead() {
  return (
    <div className="welcome-head container row-flex center">
      <div className="welcome-content">
        <div className="welcome-msg">
          <h1 className="h1">
            الطريقة <span>الأسهل</span> و<span>الأفضل</span> <br /> لنقل أثاث
            منزلك
          </h1>
          <h2>شايل هم النقل؟ حمل تطبيق شيبر.. وازهل الباقي علينا</h2>
        </div>
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
      </div>

      <div className="welcome-img">
        <img src={welcomeImg} alt="welcome" />
      </div>
    </div>
  );
}

export default WelcomeHead;
