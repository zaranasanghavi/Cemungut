import PropTypes from "prop-types";
import "./hero.css";

const Hero = ({ className = "" }) => {
  return (
    <div className={`hero ${className}`}>
      <div className="brand-wrapper">
        <div className="cemungut1">
          <h3 className="cemungut-business1">
            CEMUNGUT - Business Landing Page
          </h3>
        </div>
      </div>
      <div className="empowering-dreams-inspiring-s-parent">
        <h1 className="empowering-dreams-inspiring">
          Empowering Dreams, Inspiring Success: Your Business, Your Triumph.
        </h1>
        <div className="hero-description">
          <p className="where-innovation-meets">
            Where innovation meets success! Step into a world of possibilities
            as we redefine business excellence. Explore our comprehensive
            solutions tailored to elevate your ventures. Join us on a journey of
            growth, collaboration, and unparalleled success.
          </p>
        </div>
      </div>
      <div className="read-more-parent">
        <button className="read-more">
          <b className="read-more1">Read More</b>
        </button>
        <div className="shapes">
          <div className="ellipse-parent">
            <div className="frame-child" />
            <img className="frame-item" alt="" src="/polygon-1-1.svg" />
          </div>
        </div>
        <div className="learn-more">
          <a className="learn-more1">Learn More</a>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
