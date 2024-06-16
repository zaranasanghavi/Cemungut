import PropTypes from "prop-types";
import "./frame-component3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <header className={`top-parent ${className}`}>
      <div className="top">
        <div className="contact-123">Contact : +123 456 789</div>
        <div className="language">
          <a className="eng">ENG</a>
          <div className="shape-wrapper">
            <img className="shape-icon" alt="" src="/shape.svg" />
          </div>
        </div>
        <div className="cemungut-business">
          CEMUNGUT - Business Landing Page
        </div>
      </div>
      <div className="main-content">
        <div className="content-wrapper">
          <div className="content-elements-wrapper">
            <div className="content-elements">
              <img
                className="crowdsource-icon"
                loading="lazy"
                alt=""
                src="/crowdsource.svg"
              />
              <div className="cemungut-wrapper">
                <h3 className="cemungut">CEMUNGUT</h3>
              </div>
            </div>
          </div>
          <nav className="navigation">
            <nav className="menu">
              <a className="home">Home</a>
              <a className="about">About</a>
              <a className="services1">Services</a>
              <a className="blog">Blog</a>
              <a className="testimonials">Testimonials</a>
            </nav>
          </nav>
          <div className="search">
            <div className="button">
              <img className="button-child" alt="" src="/rectangle-12339.svg" />
              <a className="search1">Search</a>
            </div>
            <div className="add-your-text">Add Your Text Here...</div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
