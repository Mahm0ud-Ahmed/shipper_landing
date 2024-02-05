import DownloadApp from "../../assets/download.svg";
import SignUp from "../../assets/create_account.svg";
import Feature from "../../assets/feature.svg";

function ShipmentStep() {
  return (
    <section className="shipment-steps">
      <div className="container col-flex">
        <div className="intro col-flex center">
          <h2 className="h2">أنقل كل شئ في ثلاث خطوات</h2>
          <p className="h2-m">
            إنجازاتنا بالمملكة العربية السعودية ﺷﺮﻛﺎت وأﻓﺮاد ﻣﻮﺛﻘﻴﻦ ﻟﺪى شيبر وﺗﻢ
            اﺧﺘﻴﺎرﻫﻢ ﺑﻌﻨﺎﻳﺔ ﻟﺘﻘﺪﻳﻢ ﺧﺪﻣﺔ ذات ﺟﻮدة ﻋﺎﻟﻴﺔ وأﺳﻌﺎر ﻣﻨﺎﻓﺴﺔ
          </p>
        </div>

        <div className="steps">
          {steps.map((step) => (
            <div key={step.title} className="item col-flex">
              <img src={step.icon} alt="icon" />
              <h2 className="h2-m">{step.title}</h2>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShipmentStep;

let steps = [
  {
    icon: DownloadApp,
    title: "تنزيل تطبيق شيبير",
    desc: "إنجازاتنا بالمملكة العربية السعودية ﺷﺮﻛﺎت وأﻓﺮاد ﻣﻮﺛﻘﻴﻦ ﻟﺪى شيبر وﺗﻢ اﺧﺘﻴﺎرﻫﻢ ﺑﻌﻨﺎﻳﺔ ﻟﺘﻘﺪﻳﻢ ﺧﺪﻣﺔ ذات ﺟﻮدة ﻋﺎﻟﻴﺔ وأﺳﻌﺎر ﻣﻨﺎﻓﺴﺔ",
  },
  {
    icon: SignUp,
    title: "إنشاء حساب",
    desc: "إنجازاتنا بالمملكة العربية السعودية ﺷﺮﻛﺎت وأﻓﺮاد ﻣﻮﺛﻘﻴﻦ ﻟﺪى شيبر وﺗﻢ اﺧﺘﻴﺎرﻫﻢ ﺑﻌﻨﺎﻳﺔ ﻟﺘﻘﺪﻳﻢ ﺧﺪﻣﺔ ذات ﺟﻮدة ﻋﺎﻟﻴﺔ وأﺳﻌﺎر ﻣﻨﺎﻓﺴﺔ",
  },
  {
    icon: Feature,
    title: "استمتع بالمميزات",
    desc: "إنجازاتنا بالمملكة العربية السعودية ﺷﺮﻛﺎت وأﻓﺮاد ﻣﻮﺛﻘﻴﻦ ﻟﺪى شيبر وﺗﻢ اﺧﺘﻴﺎرﻫﻢ ﺑﻌﻨﺎﻳﺔ ﻟﺘﻘﺪﻳﻢ ﺧﺪﻣﺔ ذات ﺟﻮدة ﻋﺎﻟﻴﺔ وأﺳﻌﺎر ﻣﻨﺎﻓﺴﺔ",
  },
];
