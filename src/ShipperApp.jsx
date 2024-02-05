import Header from "./component/header/Header";
import OrderSteps from "./component/order_steps/OrderSteps";
import ShipmentStep from "./component/shipment_step/ShipmentStep";
import WhyShipper from "./component/why_shipper/WhyShipper";
function App() {
  return (
    <div className="shipper-app" style={{overflow: 'hidden'}}>
      <Header />
      <WhyShipper/>
      <ShipmentStep />
      <OrderSteps />
    </div>
  );
}

export default App;
