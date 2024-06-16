import { useMemo } from "react";
import PropTypes from "prop-types";
import "./section-one.css";

const SectionOne = ({
  className = "",
  designServices,
  greatDesigner,
  propDisplay,
  propMinWidth,
}) => {
  const greatDesignerStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={`section-one ${className}`}>
      <img
        className="design-services-icon"
        loading="lazy"
        alt=""
        src={designServices}
      />
      <b className="great-designer" style={greatDesignerStyle}>
        {greatDesigner}
      </b>
      <div className="explore-solutions-engineered">
        Explore Solutions Engineered for Your Success Story.
      </div>
    </div>
  );
};

SectionOne.propTypes = {
  className: PropTypes.string,
  designServices: PropTypes.string,
  greatDesigner: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default SectionOne;
