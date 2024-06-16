import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`right-about-container-parent ${className}`}>
      <div className="right-about-container">
        <div className="right-image-background" />
        <div className="image1" />
        <div className="left-about1">
          <div className="right-about-heading">
            <b className="about-us1">About Us</b>
            <div className="right-about-subtitle">
              <h1 className="crafting-success-stories">
                Crafting Success Stories, One Venture at a Time.
              </h1>
            </div>
          </div>
          <p className="where-innovation-meets4">
            Where innovation meets success! Step into a world of possibilities
            as we redefine business excellence. Explore our comprehensive
            solutions tailored to elevate your ventures. Join us on a journey of
            growth, collaboration, and unparalleled success.
          </p>
          <div className="placeholder-parent">
            <div className="placeholder">
              <div className="empty">132,57+</div>
            </div>
            <div className="frame-container">
              <div className="frame-div">
                <div className="our-section-about-wrapper">
                  <h3 className="our-section-about2">{`Our Section About `}</h3>
                </div>
                <p className="where-innovation-meets5">{`Where innovation meets success! Step into a world of possibilities as we redefine business excellence. `}</p>
              </div>
              <div className="happy-clients-wrapper">
                <b className="happy-clients2">Happy Clients</b>
              </div>
            </div>
          </div>
          <div className="duplicate-content">132,57+</div>
          <b className="happy-clients3">Happy Clients</b>
          <p className="join-us-on2">
            Join us on a journey of collaboration, and unparalleled success.
          </p>
        </div>
      </div>
      <div className="solution-description">
        <p className="explore-our-comprehensive">
          Explore our comprehensive solutions tailored to elevate your ventures.
          Join us on a journey of growth and unparalleled success.
        </p>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
