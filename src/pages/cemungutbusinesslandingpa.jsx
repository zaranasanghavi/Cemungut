import FrameComponent3 from "../components/frame-component3";
import Hero from "../components/hero";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import ServicesContent from "../components/services-content";
import SectionServices from "../components/section-services";
import Blog from "../components/blog";
import Testimonials from "../components/testimonials";
import FooterContent from "../components/footer-content";
import CopyRight from "../components/copy-right";
import "./cemungutbusinesslandingpa.css"

const CEMUNGUTBusinessLandingPa = () => {
  return (
    <div className="cemungut-business-landing-pa">
      <FrameComponent3 />
      <section className="hero-parent">
        <Hero />
        <FrameComponent2 />
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <section className="services">
        <ServicesContent />
        <SectionServices />
      </section>
      <Blog />
      <Testimonials />
      <footer className="footer">
        <b className="contact">Contact</b>
        <FooterContent />
        <CopyRight />
      </footer>
    </div>
  );
};

export default CEMUNGUTBusinessLandingPa;
