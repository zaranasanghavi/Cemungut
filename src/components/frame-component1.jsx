import PropTypes from "prop-types";
import "./frame-component1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`left-about-parent ${className}`}>
      <div className="left-about">
        <div className="image-wrapper">
          <textarea className="image-background" rows={12} cols={13} />
          <div className="image" />
          <img className="image-icon" loading="lazy" alt="" src="/image.svg" />
        </div>
      </div>
      <div className="about-content">
        <div className="content-wrapper1">
          <div className="heading-parent">
            <div className="heading">
              <b className="about-us">About Us</b>
              <h1 className="driving-change-defining">
                Driving Change, Defining Leadership
              </h1>
            </div>
            <p className="where-innovation-meets1">
              Where innovation meets success! Step into a world of possibilities
              as we redefine business excellence. Explore our comprehensive
              solutions tailored to elevate your ventures. Join us on a journey
              of growth, collaboration, and unparalleled success.
            </p>
          </div>
          <div className="content-wrapper-inner">
            <div className="frame-parent">
              <div className="frame-group">
                <div className="our-section-about-one-wrapper">
                  <h3 className="our-section-about">Our Section About One</h3>
                </div>
                <p className="where-innovation-meets2">{`Where innovation meets success! Step into a world of possibilities as we redefine business excellence. `}</p>
              </div>
              <div className="where-innovation-meets-success-wrapper">
                <p className="where-innovation-meets3">{`Where innovation meets success! Step into a world of possibilities as we redefine business excellence. `}</p>
              </div>
              <h3 className="our-section-about1">Our Section About Two</h3>
            </div>
          </div>
          <div className="clients-content-wrapper">
            <div className="clients-content">
              <b className="clients-heading">132,57+</b>
              <b className="happy-clients">Happy Clients</b>
              <div className="clients-slogan">
                <p className="join-us-on">
                  Join us on a journey of unparalleled success.
                </p>
                <p className="join-us-on1">
                  Join us on a journey of unparalleled success.
                </p>
              </div>
              <div className="clients-heading-duplicate">
                <b className="clients-title-duplicate">217,98+</b>
                <b className="happy-clients1">Happy Clients</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
