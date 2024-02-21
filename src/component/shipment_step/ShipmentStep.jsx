import DownloadApp from "../../assets/download.svg";
import SignUp from "../../assets/create_account.svg";
import Feature from "../../assets/feature.svg";
import { FormattedMessage } from "react-intl";

function ShipmentStep() {
  return (
    <section className="shipment-steps" id="our-us">
      <div className="container col-flex">
        <div className="intro col-flex center">
          <h2 className="h2 grd-b">
            <FormattedMessage id="shipment_steps_title" />
          </h2>
          <p className="h2-m">
            <FormattedMessage id="why_shipper_achievement_title" />
          </p>
        </div>

        <div className="steps">
          {steps.map((step) => (
            <div key={step.title} className="item col-flex">
              <img src={step.icon} alt="icon" />
              <h2 className="h2-m"><FormattedMessage id={step.title} /></h2>
              <p>
                {" "}
                <FormattedMessage id={step.desc} />
              </p>
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
    title: "shipment_steps_step_1",
    desc: "why_shipper_achievement_title",
  },
  {
    icon: SignUp,
    title: "shipment_steps_step_2",
    desc: "why_shipper_achievement_title",
  },
  {
    icon: Feature,
    title: "shipment_steps_step_3",
    desc: "why_shipper_achievement_title",
  },
];
