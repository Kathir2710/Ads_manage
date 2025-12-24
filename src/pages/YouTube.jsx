import { useEffect, useState } from "react";
import "../styles/youtube.css";

const BACKEND_URL = "https://social-ads-backend.onrender.com";

export default function YouTube() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);
  const [metrics, setMetrics] = useState(null);

  // Detect login redirect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("loggedIn") === "true") {
      setLoggedIn(true);
    }
  }, []);

  const loginWithGoogle = () => {
    window.location.href = `${BACKEND_URL}/google/login`;
  };

  const uploadVideo = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch(`${BACKEND_URL}/upload-video`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploadResult(data);
  };

  const fetchMetrics = async () => {
    const res = await fetch(`${BACKEND_URL}/googleads-metrics`);
    const data = await res.json();
    setMetrics(data);

    // chart
    if (data.results?.length) {
      const labels = data.results.map(r => r.campaign.name);
      const impressions = data.results.map(r => r.metrics.impressions);
      const clicks = data.results.map(r => r.metrics.clicks);

      new Chart(document.getElementById("ytChart"), {
        type: "bar",
        data: {
          labels,
          datasets: [
            { label: "Impressions", data: impressions },
            { label: "Clicks", data: clicks },
          ],
        },
      });
    }
  };

  return (
    <div className="yt-page">
      <h2>📺 YouTube & Google Ads</h2>

      {!loggedIn ? (
        <button className="yt-btn primary" onClick={loginWithGoogle}>
          Login with Google
        </button>
      ) : (
        <p className="yt-status">✅ Logged in</p>
      )}

      <hr />

      <h3>Upload Ad Video</h3>
      <form className="yt-form" onSubmit={uploadVideo}>
        <input name="title" placeholder="Video Title" required />
        <textarea name="description" placeholder="Description" />
        <select name="privacyStatus">
          <option value="public">Public</option>
          <option value="unlisted">Unlisted</option>
          <option value="private" defaultValue>
            Private
          </option>
        </select>
        <input type="file" name="video" accept="video/*" required />
        <button className="yt-btn secondary">Upload</button>
      </form>

      {uploadResult && (
        <pre className="yt-pre">
          {JSON.stringify(uploadResult, null, 2)}
        </pre>
      )}

      <hr />

      <h3>Google Ads Metrics</h3>
      <button className="yt-btn secondary" onClick={fetchMetrics}>
        Fetch Metrics
      </button>

      {metrics && (
        <pre className="yt-pre">
          {JSON.stringify(metrics, null, 2)}
        </pre>
      )}

      <canvas id="ytChart"></canvas>
    </div>
  );
}
