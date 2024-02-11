import DownloadApp from "../common/DownloadApp";

import Mobile from "../../assets/mobile.png";
import Social from "../common/Social";

function ConnectUs() {
  return (
    <section className="connect-us" id="connect-us">
      <div className="container">
        <div className="connect row-flex">
          <div className="connect-content">
            <h2 className="h2 grd-b">تواصل معنا</h2>
            <div className="msg">
              <p className="h2-m">هل لديك سؤال؟</p>
              <p className="h2-m">لا تتردد في التواصل معنا!</p>
            </div>
            <Social />
          </div>

          <form type="submit" method="post" className="connect-form col-flex">
            <div className="user-info row-flex">
              <input type="text" name="user_name" id="" placeholder="الأسم" />
              <input
                type="text"
                name="phone_number"
                id=""
                placeholder="رقم الجوال"
              />
            </div>
            <textarea
              name="note"
              id=""
              cols="30"
              rows="10"
              placeholder="كيف نساعدك؟ أشعر بالراحة لتخبرنا عما تريد!"
            ></textarea>
            <button className="btn-mark" type="submit">
              إرسال
            </button>
          </form>
        </div>

        <div className="store-app row-flex">
          <div className="download-content">
            <h2 className="h2">حمل تطبيق شيبر الآن وتمتع بخدماتنا!</h2>
            <p className="h2-m">
              لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسكينغ إليت، سيد دو
              إيوسمود تيمبور إنسيديدينت أوت لابوريت و دولاري ماجنا اليكوا.
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
