/* global FB, Chart */

let instaChart = null;

export async function getInstagramInfo(selectedPage) {
  return new Promise((resolve) => {
    FB.api(
      `/${selectedPage.id}?fields=instagram_business_account`,
      { access_token: selectedPage.access_token },
      (r) => {
        if (!r || !r.instagram_business_account) {
          resolve({ error: "No Instagram linked" });
          return;
        }

        const igId = r.instagram_business_account.id;
        FB.api(
          `/${igId}?fields=username,followers_count,media_count,profile_picture_url`,
          { access_token: selectedPage.access_token },
          (res) => resolve(res)
        );
      }
    );
  });
}

export async function createInstagramPost(selectedPage, imageUrl, caption) {
  return new Promise((resolve) => {
    FB.api(
      `/${selectedPage.id}?fields=instagram_business_account`,
      { access_token: selectedPage.access_token },
      (r) => {
        if (!r || !r.instagram_business_account) {
          resolve({ error: "No Instagram linked" });
          return;
        }

        const igId = r.instagram_business_account.id;

        fetch(`https://graph.facebook.com/v19.0/${igId}/media`, {
          method: "POST",
          body: new URLSearchParams({
            image_url: imageUrl,
            caption,
            access_token: selectedPage.access_token,
          }),
        })
          .then((r) => r.json())
          .then((d) => {
            if (d.error) {
              resolve(d);
              return;
            }

            fetch(
              `https://graph.facebook.com/v19.0/${igId}/media_publish`,
              {
                method: "POST",
                body: new URLSearchParams({
                  creation_id: d.id,
                  access_token: selectedPage.access_token,
                }),
              }
            )
              .then((r) => r.json())
              .then(resolve);
          });
      }
    );
  });
}

export async function getInstagramInsights(selectedPage) {
  return new Promise((resolve) => {
    FB.api(
      `/${selectedPage.id}?fields=instagram_business_account`,
      { access_token: selectedPage.access_token },
      (r) => {
        if (!r || !r.instagram_business_account) {
          resolve({ error: "No Instagram linked" });
          return;
        }

        const igId = r.instagram_business_account.id;

        FB.api(
          `/${igId}/insights?metric=reach,profile_views,accounts_engaged,total_interactions,follower_count&period=days_7`,
          { access_token: selectedPage.access_token },
          (res) => {
            if (instaChart) instaChart.destroy();

            const labels = res.data.map((i) => i.name);
            const values = res.data.map((i) => i.values[0].value);

            instaChart = new Chart(
              document.getElementById("instaChart"),
              {
                type: "bar",
                data: {
                  labels,
                  datasets: [
                    {
                      data: values,
                      backgroundColor: "#E1306C",
                      borderRadius: 8,
                    },
                  ],
                },
              }
            );

            resolve(res);
          }
        );
      }
    );
  });
}

export async function getInstagramAdMetrics(selectedAdAccount) {
  return new Promise((resolve) => {
    const id = selectedAdAccount.id.replace("act_", "");

    FB.api(
      `/act_${id}/insights?fields=campaign_name,impressions,clicks,spend,reach,ctr&date_preset=last_7d`,
      "GET",
      {},
      (res) => {
        resolve(res);
      }
    );
  });
}
