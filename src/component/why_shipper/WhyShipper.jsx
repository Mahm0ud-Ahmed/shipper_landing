import Truck from "../../assets/truck.svg";
import Location from "../../assets/location.svg";
import Office from "../../assets/office.svg";
import Clint from "../../assets/customer.svg";

function WhyShipper() {
  return (
    <section className="why-shipper" id="why-shipper">
      <div className="row-flex container">
        <div className="shipper-truck">
          <img src={Truck} alt="truck" />
        </div>
        <div className="why-content">
          <h2 className="title h2 grd-b">لماذا شيبر؟</h2>
          <p className="h2-m">
            إنجازاتنا بالمملكة العربية السعودية ﺷﺮﻛﺎت وأﻓﺮاد ﻣﻮﺛﻘﻴﻦ ﻟﺪى شيبر وﺗﻢ
            اﺧﺘﻴﺎرﻫﻢ ﺑﻌﻨﺎﻳﺔ ﻟﺘﻘﺪﻳﻢ ﺧﺪﻣﺔ ذات ﺟﻮدة ﻋﺎﻟﻴﺔ وأﺳﻌﺎر ﻣﻨﺎﻓﺴﺔ
          </p>
          <div className="achievements">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="item row-flex">
                <img src={achievement.img} alt="icon" />
                <div className="info">
                  <p>{achievement.counter}</p>
                  <p>{achievement.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyShipper;

let achievements = [
  {
    img: Location,
    counter: 1178,
    title: "نقلة من موقع لموقع",
  },
  {
    img: Office,
    counter: 122,
    title: "تعاون مع مصنع ومتجر",
  },
  {
    img: Clint,
    counter: 100,
    title: "عميل راضي بخدماتنا",
  },
];
