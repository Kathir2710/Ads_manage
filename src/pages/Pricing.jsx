export default function Pricing() {
  return (
    <section className="pricing page">
      <div className="container">

        <header className="pricing-header">
          <h1>Pricing Plans</h1>
          <p className="muted">
            Flexible plans for startups, agencies, and enterprises
          </p>
        </header>

        <div className="pricing-grid">

          <div className="price-card">
            <h3>Starter</h3>
            <p className="price">₹0</p>
            <ul>
              <li>✔ Facebook & Instagram Ads</li>
              <li>✔ Basic Analytics</li>
              <li>✔ Limited Campaigns</li>
            </ul>
            <button className="cta outline">Get Started</button>
          </div>

          <div className="price-card highlight">
            <span className="badge-top">Most Popular</span>
            <h3>Professional</h3>
            <p className="price">₹2,999 / month</p>
            <ul>
              <li>✔ All Social Platforms</li>
              <li>✔ Real-Time Analytics</li>
              <li>✔ Budget Optimization</li>
              <li>✔ Priority Support</li>
            </ul>
            <button className="cta">Start Free Trial</button>
          </div>

          <div className="price-card">
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <ul>
              <li>✔ Unlimited Campaigns</li>
              <li>✔ Dedicated Account Manager</li>
              <li>✔ Custom Integrations</li>
            </ul>
            <button className="cta outline">Contact Sales</button>
          </div>

        </div>
      </div>
    </section>
  );
}
