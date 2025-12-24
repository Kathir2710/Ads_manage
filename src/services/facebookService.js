const FB_APP_ID = "2766175383577129";
const FB_SCOPES =
  "public_profile,pages_show_list,pages_manage_posts,pages_read_engagement,ads_read,ads_management,business_management,instagram_basic,instagram_manage_insights,instagram_content_publish";

let accessToken = null;

export function initFacebook() {
  return new Promise((resolve) => {
    if (window.FB) {
      resolve();
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: FB_APP_ID,
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });

      window.FB.getLoginStatus((res) => {
        if (res.status === "connected") {
          accessToken = res.authResponse.accessToken;
        }
        resolve();
      });
    };

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    document.body.appendChild(script);
  });
}

export function fbLogin() {
  return new Promise((resolve) => {
    window.FB.login(
      (res) => {
        if (res.authResponse) {
          accessToken = res.authResponse.accessToken;
          resolve(res);
        } else {
          resolve(null);
        }
      },
      { scope: FB_SCOPES }
    );
  });
}

export function fbLogout() {
  window.FB.logout();
  accessToken = null;
}

export function getAdAccounts() {
  return new Promise((resolve) => {
    window.FB.api("/me/adaccounts", { access_token: accessToken }, (res) =>
      resolve(res.data || [])
    );
  });
}

export function getAdInsights(adAccountId) {
  return new Promise((resolve) => {
    window.FB.api(
      `/${adAccountId}/insights`,
      {
        fields: "spend,impressions,clicks",
        date_preset: "last_7d",
        access_token: accessToken,
      },
      (res) => resolve(res.data?.[0])
    );
  });
}

export function getPages() {
  return new Promise((resolve) => {
    window.FB.api("/me/accounts", { access_token: accessToken }, (res) =>
      resolve(res.data || [])
    );
  });
}

export function postToPage(pageId, pageToken, message) {
  return fetch(`https://graph.facebook.com/v19.0/${pageId}/feed`, {
    method: "POST",
    body: new URLSearchParams({
      message,
      access_token: pageToken,
    }),
  }).then((r) => r.json());
}

export function getPageInsights(pageId, pageToken) {
  const metrics = "page_impressions,page_engaged_users,page_fan_adds";

  return new Promise((resolve) => {
    window.FB.api(
      `/${pageId}/insights`,
      {
        metric: metrics,
        period: "days_7",
        access_token: pageToken,
      },
      (res) => resolve(res)
    );
  });
}
