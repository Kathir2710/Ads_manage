export default function DashboardHome() {
  return (
    <>
      {/* TOP BAR */}
      <div className="dash-top">
        <input placeholder="Search for ads, videos or accounts" />
        <div className="icons">
          <span>🔍</span>
          <span>🔔</span>
          <span className="avatar">👤</span>
        </div>
      </div>

      {/* HEADER */}
      <div className="dash-head">
        <h1>Welcome back, John 👋</h1>
        <p>Here’s a summary of your ad performance across platforms.</p>
      </div>

      {/* PLATFORM STATS */}
       <section className="platform-row">
        <div className="stat-card facebook"><strong>128,450</strong><span>Impressions</span></div>
        <div className="stat-card instagram"><strong>84,320</strong><span>Engagements</span></div>
        <div className="stat-card youtube"><strong>74,209</strong><span>Views</span></div>
        <div className="stat-card snapchat"><strong>₹122,300</strong><span>Ad Spend</span></div>
      </section>

      {/* ANALYTICS */}
      <section className="analytics-grid">
        <div className="graph-box">
          <h3>Performance Overview</h3>
          <div className="graph-placeholder">
            📊 Multi-line chart (Impressions · Clicks · CTR · Conversions)
          </div>
        </div>

        <div className="usage-box">
          <h3>Platform Usage</h3>

          <div className="donut">
            <div className="donut-center">76%</div>
          </div>

          <ul className="usage-list">
            <li><span className="fb-dot"></span> Facebook <b>32%</b></li>
            <li><span className="ig-dot"></span> Instagram <b>26%</b></li>
            <li><span className="yt-dot"></span> YouTube <b>18%</b></li>
            <li><span className="sc-dot"></span> Snapchat <b>11%</b></li>
          </ul>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="bottom-grid">
        <div className="campaigns">
          <h3>Top Campaigns</h3>

          <div className="campaign-row">
            <span>Summer Sale 2024</span>
            <strong>₹24,500</strong>
          </div>

          <div className="campaign-row">
            <span>Lead Gen for E-Book</span>
            <strong>₹20,300</strong>
          </div>

          <div className="campaign-row">
            <span>Brand Awareness Push</span>
            <strong>₹274,500</strong>
          </div>
        </div>

        <div className="activity">
          <h3>Recent Activity</h3>
          <p>📢 Budget increased for YouTube Awareness</p>
          <p>📸 Snapchat Story Ads launched</p>
          <p>📘 Facebook Lead Ads updated</p>
        </div>
      </section>
    </>
  );
}
