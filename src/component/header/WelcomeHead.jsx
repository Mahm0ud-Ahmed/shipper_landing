import welcomeImg from "../../assets/welcome_header.svg";
import DownloadApp from "../common/DownloadApp";
function WelcomeHead() {
  return (
<div className="welcome-head container row-flex center" >
      <div className="welcome-content">
        <div className="welcome-msg">
          <h1 className="h1">
            الطريقة <span>الأسهل</span> و<span>الأفضل</span> <br /> لنقل أثاث
            منزلك
          </h1>
          <h2>شايل هم النقل؟ حمل تطبيق شيبر.. وازهل الباقي علينا</h2>
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
