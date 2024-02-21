import Truck from "../../assets/truck.svg";
import Location from "../../assets/location.svg";
import Office from "../../assets/office.svg";
import Clint from "../../assets/customer.svg";
import { FormattedMessage, useIntl } from "react-intl";

function WhyShipper() {
  const { locale } = useIntl();
  return (
    <section className="why-shipper" id="why-shipper">
      <div className="row-flex container">
        <div className="shipper-truck">
          <img src={Truck} alt="truck" />
        </div>
        <div className="why-content">
          <h2 className="title h2 grd-b">
            <FormattedMessage id="app_bar_why" />
            {locale === "en-US" ? "?" : "؟"}
          </h2>
          <p className="h2-m">
            <FormattedMessage id="why_shipper_achievement_title" />
          </p>
          <div className="achievements">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="item row-flex">
                <img src={achievement.img} alt="icon" />
                <div className="info">
                  <p>{achievement.counter}</p>
                  <p>
                    <FormattedMessage id={achievement.title} />
                  </p>
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
    title: "why_shipper_achievement_move",
  },
  {
    img: Office,
    counter: 122,
    title: "why_shipper_achievement_collaborate",
  },
  {
    img: Clint,
    counter: 100,
    title: "why_shipper_achievement_satisfied",
  },
];
