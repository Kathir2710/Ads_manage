export default function Services() {
  const services = [
    {
      title: "AI-Powered Ad Creation",
      desc: "Provide a simple prompt and our AI automatically generates high-converting ad creatives, captions, and variations optimized for each platform.",
    },
    {
      title: "Multi-Platform Publishing",
      desc: "Publish ads seamlessly across Facebook, Instagram, YouTube, Snapchat, and more from a single dashboard.",
    },
    {
      title: "Centralized Campaign Control",
      desc: "Manage campaigns, creatives, schedules, and budgets from one unified workspace without switching tools.",
    },
    {
      title: "Real-Time Performance Analytics",
      desc: "Track impressions, clicks, CTR, conversions, and spend with live dashboards and visual insights.",
    },
    {
      title: "AI Budget Optimization",
      desc: "Automatically allocate budgets to top-performing ads to reduce waste and maximize ROI.",
    },
    {
      title: "Enterprise-Grade Security",
      desc: "Role-based access control and secure authentication designed for teams and agencies.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="container services-hero-inner">
          <div className="services-hero-left">
            <h1>Your Growth Area</h1>
            <p>
              Our platform enables businesses to create, launch, and optimize
              social media ads using AI — all from one centralized system.
            </p>
            <p>
              From writing ad prompts to publishing across platforms and
              measuring results, everything happens in one place.
            </p>
            <button className="cta">About Company →</button>
          </div>

          {/* STATS PANEL (INSPIRED BY IMAGE) */}
          <div className="services-hero-right">
            <div className="stats-grid">
              <div className="stat dark">
                <h2>50K+</h2>
                <p>Active Advertisers</p>
              </div>
              <div className="stat red">
                <h2>1.6B</h2>
                <p>Conversions / Year</p>
              </div>
              <div className="stat red">
                <h2>30%</h2>
                <p>Higher CTRs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-content">
        <div className="container">
          <header className="services-header">
            <h2>What We Offer</h2>
            <p className="page-desc">
              A complete AI-driven advertising workflow — from idea to impact.
            </p>
          </header>

          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <button className="cta">Start Creating Ads</button>
          </div>
        </div>
      </section>
    </>
  );
}
