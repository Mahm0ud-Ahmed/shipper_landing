import ConnectUs from "./component/connect_us/ConnectUs";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import OrderSteps from "./component/order_steps/OrderSteps";
import ShipmentStep from "./component/shipment_step/ShipmentStep";
import WhyShipper from "./component/why_shipper/WhyShipper";
import useDirection from "./i18n/useDirection";
function ShipperApp() {
  useDirection();
  return (
    <div className="shipper-app" style={{ overflow: "hidden" }}>
      <Header />
      <WhyShipper />
      <ShipmentStep />
      <OrderSteps />
      <ConnectUs />
      <Footer />
    </div>
  );
}

export default ShipperApp;
