import PropTypes from "prop-types";
import "./copy-right.css";

const CopyRight = ({ className = "" }) => {
  return (
    <div className={`copyright ${className}`}>
      <div className="copyright-container">
        <div className="copyright-wrapper">
          <div className="copyright-inner">
            <img className="copyright-icon" alt="" src="/copyright.svg" />
          </div>
          <p className="meydexa-medical">
            MEYDEXA - Medical 2024. All rights reserved.
          </p>
        </div>
      </div>
      <b className="contact-us">Contact Us : +12 345 678 921</b>
      <img className="phone-in-talk-icon" alt="" src="/phone-in-talk.svg" />
    </div>
  );
};

CopyRight.propTypes = {
  className: PropTypes.string,
};

export default CopyRight;
