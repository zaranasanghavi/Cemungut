import Services from "./services";
import PropTypes from "prop-types";
import "./section-services.css";

const SectionServices = ({ className = "" }) => {
  return (
    <div className={`section-services ${className}`}>
      <div className="services-1">
        <div className="service-item">
          <img
            className="shopping-bag-icon"
            loading="lazy"
            alt=""
            src="/shopping-bag.svg"
          />
        </div>
        <h3 className="our-services-one">Our Services One</h3>
        <p className="join-us-on4">
          Join us on a journey of growth, collaboration, and unparalleled
          success.
        </p>
      </div>
      <Services
        ourServicesTwo="Our Services Two"
        businessCenter="/business-center.svg"
      />
      <Services
        ourServicesTwo="Our Services Three"
        businessCenter="/insert-chart.svg"
        propRight="-840px"
        propLineHeight="31px"
        propRight1="-812px"
      />
      <Services
        ourServicesTwo="Our Services Four"
        businessCenter="/inactive-order.svg"
        propRight="-1260px"
        propLineHeight="79px"
        propRight1="-1232px"
      />
    </div>
  );
};

SectionServices.propTypes = {
  className: PropTypes.string,
};

export default SectionServices;
