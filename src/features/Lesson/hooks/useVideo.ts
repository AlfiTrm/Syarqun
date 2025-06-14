export const storage = {
  getItem: (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch {}
  },
};

export function getEmbedUrl(url: string) {
  try {
    const u = new URL(url);
    const videoId = u.hostname.includes("youtube.com")
      ? u.searchParams.get("v")
      : u.pathname.slice(1);
    if (!videoId) throw new Error("No ID");
    return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`;
  } catch {
    return "";
  }
}
