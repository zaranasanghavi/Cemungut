import PropTypes from "prop-types";
import "./testimonials.css";

const Testimonials = ({ className = "" }) => {
  return (
    <section className={`testimonials1 ${className}`}>
      <div className="testimonials-content">
        <div className="testimonials-header">
          <div className="testimonials-title">
            <div className="testimonials-heading">
              <h3 className="our-testimonials">Our Testimonials</h3>
            </div>
            <h1 className="client-testimonials-that">
              {" "}
              Client Testimonials That Inspire
            </h1>
          </div>
        </div>
        <p className="where-innovation-meets8">
          Where innovation meets success! Step into a world of possibilities as
          we redefine business excellence. Explore our comprehensive solutions
          tailored to elevate your ventures. Join us on a journey of growth,
          collaboration, and unparalleled success.
        </p>
      </div>
      <div className="testimonial">
        <div className="testimonials-1">
          <img
            className="testimonials-1-child"
            alt=""
            src="/rectangle-123401.svg"
          />
          <div className="testimonial-content">
            <div className="image3" />
            <div className="stars">
              <img
                className="stars-child"
                loading="lazy"
                alt=""
                src="/star-1.svg"
              />
              <img
                className="stars-item"
                loading="lazy"
                alt=""
                src="/star-1.svg"
              />
              <img
                className="stars-inner"
                loading="lazy"
                alt=""
                src="/star-1.svg"
              />
              <img
                className="star-icon"
                loading="lazy"
                alt=""
                src="/star-1.svg"
              />
              <img
                className="stars-child1"
                loading="lazy"
                alt=""
                src="/star-5.svg"
              />
              <img
                className="stars-child2"
                loading="lazy"
                alt=""
                src="/star-5.svg"
              />
            </div>
          </div>
          <div className="client-name">
            <b className="dohn-joenathan">Dohn Joenathan</b>
          </div>
          <div className="it-was-clear-that-we-were-part-wrapper">
            <i className="it-was-clear">
              “It was clear that we were partnering with professionals who
              genuinely cared about our success.”
            </i>
          </div>
        </div>
        <div className="testimonials-2">
          <img
            className="testimonials-2-child"
            alt=""
            src="/rectangle-123401.svg"
          />
          <i className="it-was-clear1">
            “It was clear that we were partnering with professionals who
            genuinely cared about our success.”
          </i>
          <div className="image4" />
          <h3 className="carlos-jakson-rebel">Carlos Jakson Rebel</h3>
          <div className="stars1">
            <img className="stars-child3" alt="" src="/star-1.svg" />
            <img className="stars-child4" alt="" src="/star-1.svg" />
            <img className="stars-child5" alt="" src="/star-1.svg" />
            <img className="stars-child6" alt="" src="/star-1.svg" />
            <img className="stars-child7" alt="" src="/star-1.svg" />
            <img className="stars-child8" alt="" src="/star-1.svg" />
          </div>
        </div>
        <div className="testimonials-3">
          <img
            className="testimonials-3-child"
            alt=""
            src="/rectangle-123401.svg"
          />
          <i className="it-was-clear2">
            “It was clear that we were partnering with professionals who
            genuinely cared about our success.”
          </i>
          <div className="testimonials-3-item" />
          <b className="jessica-karmilas">Jessica Karmilas</b>
          <div className="stars2">
            <img className="stars-child9" alt="" src="/star-1.svg" />
            <img className="stars-child10" alt="" src="/star-1.svg" />
            <img className="stars-child11" alt="" src="/star-1.svg" />
            <img className="stars-child12" alt="" src="/star-1.svg" />
            <img className="stars-child13" alt="" src="/star-1.svg" />
            <img className="stars-child14" alt="" src="/star-5.svg" />
          </div>
        </div>
        <img
          className="polygon-icon"
          loading="lazy"
          alt=""
          src="/polygon.svg"
        />
        <img className="polygon-icon1" alt="" src="/polygon-1@2x.png" />
      </div>
      <div className="testimonial-navigation">
        <div className="testimonial-dots">
          <div className="dot" />
          <div className="dot1" />
          <div className="dot2" />
          <div className="dot3" />
          <div className="dot4" />
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
