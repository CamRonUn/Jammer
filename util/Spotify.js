const clientId = "b8923dc2c47946019092e3c77cff7ee5";
const clientSecret = ""

// Step 1: Get access token
async function getAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token; // expires in 1 hour
}

// Step 2: Use token to search
async function search(term) {
  const token = await getAccessToken();
  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(term)}&type=track&limit=5`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("✅ Success:", data);
      const songs = data.tracks.items.map((track) => ({
        name: track.name,
        artist: track.artists[0].name,
        url: track.external_urls.spotify,
      }));
      return songs;
    } else {
      console.error("❌ Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("⚠️ Fetch failed:", error);
  }
}

// Example usage
export {search}