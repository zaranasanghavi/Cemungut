import PropTypes from "prop-types";
import "./footer-content.css";

const FooterContent = ({ className = "" }) => {
  return (
    <div className={`footer-content ${className}`}>
      <div className="footer-columns">
        <div className="footer-column-one">
          <div className="footer-brand">
            <div className="brand-name">
              <b className="cemungut-business2">
                CEMUNGUT - Business Landing Page
              </b>
            </div>
            <div className="stay-informed">
              <h2 className="stay-information">Stay Information</h2>
              <div className="info-title">
                <b className="information">Information</b>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-column-two">
          <div className="blog-links">
            <div className="our-blog1">Our Blog</div>
            <div className="legal-links">
              <div className="press-centre">Press Centre</div>
              <div className="term-and-condition">Term and Condition</div>
            </div>
            <p className="where-innovation-meets9">{`Where innovation meets success! Step into a world of possibilities as we redefine business excellence. `}</p>
          </div>
          <div className="contact-info">
            <div className="phone-123-container">
              <span className="phone">Phone :</span>
              <span className="span"> +123 456 789</span>
            </div>
            <div className="email-examplecom-container">
              <span className="email">Email :</span>
              <span className="examplecom"> @example.com</span>
            </div>
            <div className="address-line-01">Address Line 01</div>
          </div>
          <div className="newsletter">
            <div className="signup">
              <div className="sign-up-for">Sign up for our newsletter</div>
            </div>
            <div className="subscribe">
              <img className="rectangle-icon" alt="" src="/rectangle.svg" />
              <div className="email-input">
                <div className="email-field">
                  <div className="enter-your-email">Enter Your Email Here</div>
                  <img className="mail-icon" alt="" />
                </div>
              </div>
              <div className="subscribe1">
                <b className="subscribe2">{`Subscribe `}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
