import logo from "../../assets/logo.svg";
import lang from "../../assets/language.svg";

function AppBar() {
  return (
    <div className="app-bar container row-flex">
      <div className="logo">
        <a href="#welcome-shipper">
          <img src={logo} alt="shipper-logo" />
        </a>
      </div>

      <div className="links row-flex center">
        <nav>
          <ul className="row-flex">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="actions row-flex center">
          <button className="lang row-flex center">
            <img src={lang} alt="language" /> En
          </button>
          <button className="connect btn-mark">تواصل معنا</button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;

let navLinks = [
  { title: "الرئيسية", id: "welcome-shipper" },
  { title: "لماذا شيبر", id: "why-shipper" },
  { title: "من نحن", id: "our-us" },
  { title: "خدمات شيبر", id: "services" },
  { title: "تواصل معنا", id: "connect-us" },
];
