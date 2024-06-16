import SectionOne from "./section-one";
import PropTypes from "prop-types";
import "./frame-component2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`achievements-wrapper ${className}`}>
      <div className="achievements">
        <div className="wrapper-rectangle-12340">
          <img
            className="wrapper-rectangle-12340-child"
            alt=""
            src="/rectangle-12340.svg"
          />
        </div>
        <div className="design-services">
          <SectionOne
            designServices="/design-services.svg"
            greatDesigner="Great Designer"
          />
          <SectionOne
            designServices="/cloud-done.svg"
            greatDesigner="Awesome"
            propDisplay="inline-block"
            propMinWidth="101px"
          />
          <SectionOne
            designServices="/dataset.svg"
            greatDesigner="Our Services"
            propDisplay="inline-block"
            propMinWidth="128px"
          />
          <SectionOne
            designServices="/deployed-code.svg"
            greatDesigner="Best Office"
            propDisplay="inline-block"
            propMinWidth="109px"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
