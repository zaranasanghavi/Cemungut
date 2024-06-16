import PropTypes from "prop-types";
import "./services-content.css";

const ServicesContent = ({ className = "" }) => {
  return (
    <div className={`services-content ${className}`}>
      <div className="services-header">
        <button className="our-services">
          <div className="our-services1">Our Services</div>
        </button>
        <div className="services-subtitle">
          <h1 className="comprehensive-solutions-our">
            Comprehensive Solutions, Our Range of Services
          </h1>
        </div>
        <div className="services-description">
          <p className="where-innovation-meets6">
            Where innovation meets success! Step into a world of possibilities
            as we redefine business excellence. Explore our comprehensive
            solutions tailored to elevate your ventures. Join us on a journey of
            growth, collaboration, and unparalleled success.
          </p>
        </div>
      </div>
    </div>
  );
};

ServicesContent.propTypes = {
  className: PropTypes.string,
};

export default ServicesContent;
