import Header from "./component/header/Header";
import WhyShipper from "./component/why_shipper/WhyShipper";
function App() {
  return (
    <div className="shipper-app" style={{overflow: 'hidden'}}>
      <Header />
      <WhyShipper/>
    </div>
  );
}

export default App;
