import Facebook from "../../assets/facebook.svg";
import X from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";

function Social() {
  return (
    <div className="social">
      <a href="#">
        <img src={Facebook} alt="facebook" />
      </a>
      <a href="#">
        <img src={X} alt="x" />
      </a>
      <a href="#">
        <img src={Instagram} alt="instagram" />
      </a>
      <a href="#">
        <img src={LinkedIn} alt="linkedin" />
      </a>
    </div>
  );
}

export default Social;
