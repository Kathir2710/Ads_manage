import { useEffect, useState } from "react";
import SocialLottie from "../components/SocialLottie";
import aiImg1 from "../images/ai-dashboard-1.png";
import aiImg2 from "../images/ai-dashboard-2.png";
import aiImg3 from "../images/ai-dashboard-3.png";

export default function Home() {
  const metrics = [
    { title: "Launch Ads Faster", desc: "Create AI-powered ads instantly.", value: "30X" },
    { title: "Always-On Campaigns", desc: "Automated ads that never stop.", value: "365 Days" },
    { title: "Reduce Ad Spend", desc: "AI removes wasted budget.", value: "6X" },
    { title: "Improve ROI", desc: "Smart optimization engine.", value: "10.8X" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-inner">

          {/* LEFT */}
          <div className="hero-left">
            <span className="badge">AI-Powered Ad Management Platform</span>

            <h1>
              Create, Manage & Optimize <br />
              <span>Ads Across All Platforms</span>
            </h1>

            <p>
              One AI-driven dashboard to generate ads, publish them across
              Facebook, Instagram, YouTube & Snapchat, and track real-time
              performance without manual effort.
            </p>

            <button className="cta">Start Free</button>
          </div>

          {/* RIGHT – LOTTIE */}
          <div className="hero-right">
            <SocialLottie />
          </div>
        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section className="metrics">
        <div className="container">
          <div className="metrics-slider">
            {metrics.map((m, i) => (
              <div
                key={i}
                className={`metric-slide ${i === index ? "active" : ""}`}
              >
                <div className="metric-text">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
                <div className="metric-big">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="platform-section">
        <div className="container platform-inner">

          {/* LEFT */}
          <div className="platform-left">
            <h2>How Our Platform Works</h2>
            <p>
              Simply give a prompt to our AI. It designs ad creatives,
              selects formats, publishes across platforms, and continuously
              optimizes performance using live metrics.
            </p>

            <ul>
              <li>✔ AI-generated creatives & captions</li>
              <li>✔ One-click multi-platform publishing</li>
              <li>✔ Centralized analytics & insights</li>
              <li>✔ Budget & performance optimization</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="platform-right">
            <img src={aiImg1} alt="AI Ad Creation" />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="platform-section alt">
        <div className="container platform-inner">

          {/* LEFT IMAGE */}
          <div className="platform-right">
            <img src={aiImg2} alt="Multi Platform Ads" />
          </div>

          {/* RIGHT TEXT */}
          <div className="platform-left">
            <h2>One Dashboard. All Platforms.</h2>
            <p>
              No more switching between ad managers. Track impressions,
              clicks, CTR, conversions, and spend for every platform in
              one clean interface.
            </p>

            <ul>
              <li>✔ Facebook & Instagram Ads</li>
              <li>✔ YouTube Video Campaigns</li>
              <li>✔ Snapchat Story & Discover Ads</li>
              <li>✔ Unified performance reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= ANALYTICS ================= */}
      <section className="platform-section">
        <div className="container platform-inner">

          {/* LEFT */}
          <div className="platform-left">
            <h2>Real-Time Analytics & Insights</h2>
            <p>
              See exactly what’s working. AI detects trends, highlights
              underperforming ads, and recommends improvements instantly.
            </p>

            <button className="cta">View Dashboard</button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="platform-right">
            <img src={aiImg3} alt="Analytics Dashboard" />
          </div>
        </div>
      </section>
    </>
  );
}
