import { Link } from "react-router-dom";
import heroImg from "../images/about-hero.png";     // replace later
import productImg from "../images/about-product.png";
import industryImg from "../images/about-industry.png";

export default function About() {
  return (
    <div className="about-page">

      {/* ===== HERO SECTION ===== */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>ABOUT APAIGN</h1>
          <p>
            Grow your business with our AI-powered advertising platform,
            unified campaign management, and real-time performance insights
            across all major social media networks.
          </p>

          <Link to="/register" className="about-cta">
            Get Started
          </Link>
        </div>

        <div className="about-hero-image">
          <img src={heroImg} alt="Advertising Platform" />
        </div>
      </section>

      {/* ===== WHY APAIGN ===== */}
      <section className="about-why">
        <h2>Why Apaign?</h2>
        <p>
          Apaign is built for businesses of all sizes to simplify advertising,
          reduce wasted spend, and drive measurable growth using automation
          and AI-driven insights.
        </p>

        <Link to="/services" className="secondary-btn">
          Explore Our Platform
        </Link>
      </section>

      {/* ===== FEATURE BLOCK 1 ===== */}
      <section className="about-feature">
        <div className="feature-text">
          <h3>Advertising you can trust</h3>
          <p>
            Launch and manage campaigns across Facebook, Instagram, WhatsApp,
            Snapchat, and more — all from one centralized dashboard with
            transparent metrics and controls.
          </p>

          <Link to="/services" className="about-cta small">
            Learn about our features
          </Link>
        </div>

        <div className="feature-image">
          <img src={productImg} alt="Ad Dashboard" />
        </div>
      </section>

      {/* ===== FEATURE BLOCK 2 ===== */}
      <section className="about-feature reverse">
        <div className="feature-image">
          <img src={industryImg} alt="Industry Solutions" />
        </div>

        <div className="feature-text">
          <h3>Solutions tailored to your business</h3>
          <p>
            Whether you’re a startup, agency, or enterprise, Apaign adapts
            to your industry needs with flexible budgeting, audience targeting,
            and performance optimization.
          </p>

          <Link to="/pricing" className="about-cta small">
            View Pricing
          </Link>
        </div>
      </section>

    </div>
  );
}
