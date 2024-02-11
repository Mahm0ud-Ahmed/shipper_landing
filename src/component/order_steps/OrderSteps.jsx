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
          <h2 className="h2 grd-b">آلية العمل</h2>
          <p className="h2-m">
            إنجازاتنا بالمملكة العربية السعودية ﺷﺮﻛﺎت وأﻓﺮاد ﻣﻮﺛﻘﻴﻦ ﻟﺪى شيبر
          </p>
        </div>
        {orderSteps.map((order, index) => (
          <div
            data-index={index + 1}
            key={order.title}
            className="item col-flex"
          >
            <img src={order.img} alt="icon" />
            <h2 className="h2-m">{order.title}</h2>
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
    title: "حدد موقعك",
  },
  {
    img: Shipment,
    title: "حدد شحنتك ومنقولاتك",
  },
  {
    img: Payment,
    title: "حدد طريقة الدفع",
  },
  {
    img: Tracking,
    title: "إمكانية تتبع الشحنة",
  },
  {
    img: Delivery,
    title: "استقبال الشحنة",
  },
];
