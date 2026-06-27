import "./Hero.css";
import lsppLogo from "../assets/lsppLogo.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-shape shape-green"></div>
      <div className="hero-shape shape-orange"></div>
      <div className="hero-content">
        <img src={lsppLogo} alt="LSPP" className="hero-badge-img" />

        <h1>Learn, Lead and Grow</h1>
        <p>
          Build new skills, grow your network, and shape a career path that
          excites you.
        </p>
        <div className="hero-buttons">
          <a href="#perks" className="hero-btn primary">
            Explore Perks
          </a>
          <a href="#faq" className="hero-btn secondary">
            Read FAQs
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
