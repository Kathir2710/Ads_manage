import { useEffect, useState } from "react";
import {
  getInstagramInfo,
  createInstagramPost,
  getInstagramInsights,
  getInstagramAdMetrics
} from "../services/instagramService";
import "../styles/instagram.css";

export default function Instagram({ selectedPage, selectedAdAccount }) {
  const [info, setInfo] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("Hello from dashboard!");
  const [loading, setLoading] = useState(false);

  const fetchInfo = async () => {
    if (!selectedPage) return alert("Select Facebook Page first");
    setLoading(true);
    const res = await getInstagramInfo(selectedPage);
    setInfo(res);
    setLoading(false);
  };

  const postToInstagram = async () => {
    if (!selectedPage) return alert("Select Facebook Page first");
    if (!imageUrl) return alert("Image URL required");

    setLoading(true);
    const res = await createInstagramPost(
      selectedPage,
      imageUrl,
      caption
    );
    setInfo(res);
    setLoading(false);
  };

  const fetchInsights = async () => {
    if (!selectedPage) return alert("Select Facebook Page first");
    setLoading(true);
    const res = await getInstagramInsights(selectedPage);
    setInfo(res);
    setLoading(false);
  };

  const fetchAdMetrics = async () => {
    if (!selectedAdAccount) return alert("Select Ad Account first");
    setLoading(true);
    const res = await getInstagramAdMetrics(selectedAdAccount);
    setInfo(res);
    setLoading(false);
  };

  return (
    <div className="ig-page">
      <h2>📸 Instagram Integration</h2>

      <div className="ig-actions">
        <button onClick={fetchInfo}>Fetch IG Info</button>
        <button onClick={fetchInsights}>Fetch IG Insights</button>
        <button onClick={fetchAdMetrics}>Fetch IG Ad Metrics</button>
      </div>

      <div className="ig-post-box">
        <input
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <textarea
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <button onClick={postToInstagram}>Post to Instagram</button>
      </div>

      {loading && <p className="ig-loading">Loading...</p>}

      {info && (
        <pre className="ig-output">
          {JSON.stringify(info, null, 2)}
        </pre>
      )}

      <canvas id="instaChart"></canvas>
    </div>
  );
}
