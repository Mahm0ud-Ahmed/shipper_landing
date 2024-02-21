import { FormattedMessage } from "react-intl";
import Delivery from "../../assets/delivery.svg";
import Location from "../../assets/select_location.svg";
import Payment from "../../assets/select_payment.svg";
import Shipment from "../../assets/select_shipment.svg";
import Tracking from "../../assets/tracking.svg";

function OrderSteps() {
  return (
    <section className="order-steps" id="services">
      <div className="container">
        <div className="instructions">
          <h2 className="h2 grd-b">
            <FormattedMessage id="order_steps_title" />
          </h2>
          <p className="h2-m">
            <FormattedMessage id="order_steps_subtitle" />
          </p>
        </div>
        {orderSteps.map((order, index) => (
          <div
            data-index={index + 1}
            key={order.title}
            className="item col-flex"
          >
            <img src={order.img} alt="icon" />
            <h2 className="h2-m">
              <FormattedMessage id={order.title} />
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OrderSteps;

let orderSteps = [
  {
    img: Location,
    title: "order_steps_step_1",
  },
  {
    img: Shipment,
    title: "order_steps_step_2",
  },
  {
    img: Payment,
    title: "order_steps_step_3",
  },
  {
    img: Tracking,
    title: "order_steps_step_4",
  },
  {
    img: Delivery,
    title: "order_steps_step_5",
  },
];
