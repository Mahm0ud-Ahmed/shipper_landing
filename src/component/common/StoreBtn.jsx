import PropTypes from "prop-types";

function StoreBtn({ icon, alt, link }) {
  return (
    <a href={link} className="store-btn">
      <img src={icon} alt={alt} />
    </a>
  );
}

StoreBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default StoreBtn;
