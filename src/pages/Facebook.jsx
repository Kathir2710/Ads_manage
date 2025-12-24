import { useEffect, useState } from "react";
import {
  initFacebook,
  fbLogin,
  fbLogout,
  getAdAccounts,
  getAdInsights,
  getPages,
  postToPage,
  getPageInsights,
} from "../services/facebookService";
import "../styles/facebook.css"


export default function Facebook() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [adAccounts, setAdAccounts] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [adInsights, setAdInsights] = useState(null);

  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [message, setMessage] = useState("Hello from dashboard!");

  useEffect(() => {
    initFacebook();
  }, []);

  const login = async () => {
    const res = await fbLogin();
    if (res) {
      setLoggedIn(true);
      setAdAccounts(await getAdAccounts());
      setPages(await getPages());
    }
  };

  const logout = () => {
    fbLogout();
    setLoggedIn(false);
    setAdAccounts([]);
    setPages([]);
  };

  const loadInsights = async () => {
    if (!selectedAd) return alert("Select ad account");
    const data = await getAdInsights(selectedAd.id);
    setAdInsights(data);

    new Chart(document.getElementById("adChart"), {
      type: "bar",
      data: {
        labels: ["Spend", "Impressions", "Clicks"],
        datasets: [
          {
            data: [
              data.spend || 0,
              data.impressions || 0,
              data.clicks || 0,
            ],
            backgroundColor: "#f57c00",
          },
        ],
      },
    });
  };

  const loadPageInsights = async () => {
    if (!selectedPage) return alert("Select page");

    const res = await getPageInsights(
      selectedPage.id,
      selectedPage.access_token
    );

    const getVal = (n) =>
      res.data.find((m) => m.name === n)?.values[0]?.value || 0;

    new Chart(document.getElementById("pageChart"), {
      type: "bar",
      data: {
        labels: ["Impressions", "Engaged Users", "New Fans"],
        datasets: [
          {
            data: [
              getVal("page_impressions"),
              getVal("page_engaged_users"),
              getVal("page_fan_adds"),
            ],
            backgroundColor: ["#4267B2", "#f57c00", "#00796b"],
          },
        ],
      },
    });
  };

  return (
    <>
      <div className="facebook-page">
      <h2>📘 Facebook Integration</h2>

      {!loggedIn ? (
        <button onClick={login}>Login with Facebook</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      <hr />

      <h3>Ad Accounts</h3>
      {adAccounts.map((a) => (
        <div key={a.id}>
          {a.name || a.account_id}
          <button onClick={() => setSelectedAd(a)}>Select</button>
        </div>
      ))}

      <button onClick={loadInsights}>Fetch Ad Insights</button>
      <pre>{JSON.stringify(adInsights, null, 2)}</pre>
      <canvas id="adChart" />

      <hr />

      <h3>Pages</h3>
      {pages.map((p) => (
        <div key={p.id}>
          {p.name}
          <button onClick={() => setSelectedPage(p)}>Select</button>
        </div>
      ))}

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={() =>
          postToPage(selectedPage.id, selectedPage.access_token, message)
        }
      >
        Post to Page
      </button>

      <button onClick={loadPageInsights}>Fetch Page Insights</button>
      <canvas id="pageChart" />

    </div>
    </>    
  );
}
