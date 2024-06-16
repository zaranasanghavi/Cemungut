import PropTypes from "prop-types";
import "./blog.css";

const Blog = ({ className = "" }) => {
  return (
    <section className={`blog1 ${className}`}>
      <div className="blog-header">
        <div className="blog-title">
          <b className="our-blog">Our Blog</b>
        </div>
        <h1 className="stay-update-with">Stay Update with Popular Blog!</h1>
      </div>
      <textarea className="blog-image" rows={14} cols={36} />
      <h2 className="strategies-unveiled-business">
        Strategies Unveiled: Business Wisdom in Every Post
      </h2>
      <div className="blog-content">
        <p className="where-innovation-meets7">
          Where innovation meets success! Step into a world of possibilities as
          we redefine business excellence. Explore our comprehensive solutions
          tailored to elevate your ventures. Join us on a journey of growth,
          collaboration, and unparalleled success.
        </p>
        <div className="blog-posts">
          <div className="blog-1">
            <h2 className="innovation-junction-where">
              Innovation Junction: Where Ideas and Business Converge
            </h2>
            <p className="step-into-a">{`Step into a world of possibilities as we redefine business excellence. Explore our comprehensive solutions tailored to elevate your ventures. `}</p>
          </div>
          <div className="blog-post-image">
            <textarea className="image2" rows={14} cols={36} />
            <textarea
              className="blog-3"
              placeholder="Marketplace Musings: Business Insights at Your Fingertips"
              rows={14}
              cols={36}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  className: PropTypes.string,
};

export default Blog;
