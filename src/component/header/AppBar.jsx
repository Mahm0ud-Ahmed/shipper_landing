import logo from "../../assets/logo.svg";
import lang from "../../assets/language.svg";

function AppBar() {
  return (
    <div className="app-bar container row-flex">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="shipper-logo" />
        </a>
      </div>

      <div className="links row-flex center">
        <nav>
          <ul className="row-flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="actions row-flex center">
          <button className="lang row-flex center">
            <img src={lang} alt="language" /> En
          </button>
          <button className="connect">تواصل معنا</button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;

let navLinks = ["الرئيسية", "لماذا شيبر", "من نحن", "خدمات شيبر", "تواصل معنا"];
