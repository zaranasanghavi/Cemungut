import { useMemo } from "react";
import PropTypes from "prop-types";
import "./services.css";

const Services = ({
  className = "",
  ourServicesTwo,
  businessCenter,
  propRight,
  propLineHeight,
  propRight1,
}) => {
  const joinUsOnStyle = useMemo(() => {
    return {
      right: propRight,
      lineHeight: propLineHeight,
    };
  }, [propRight, propLineHeight]);

  const ourServicesTwoStyle = useMemo(() => {
    return {
      right: propRight1,
    };
  }, [propRight1]);

  return (
    <div className={`services-2 ${className}`}>
      <p className="join-us-on3" style={joinUsOnStyle}>
        Join us on a journey of growth, collaboration, and unparalleled success.
      </p>
      <h3 className="our-services-two" style={ourServicesTwoStyle}>
        {ourServicesTwo}
      </h3>
      <img
        className="business-center-icon"
        loading="lazy"
        alt=""
        src={businessCenter}
      />
    </div>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  ourServicesTwo: PropTypes.string,
  businessCenter: PropTypes.string,

  /** Style props */
  propRight: PropTypes.any,
  propLineHeight: PropTypes.any,
  propRight1: PropTypes.any,
};

export default Services;
