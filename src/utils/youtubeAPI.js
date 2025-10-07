import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
// const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const API_KEY = "AIzaSyCSw8ij1kF15nVD6Zy3T_U_GdDtrGzvKUo";

export const fetchTrendingVideos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        maxResults: 20,
        regionCode: "IN",
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
};

export const fetchVideoById = async (videoId) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=AIzaSyCSw8ij1kF15nVD6Zy3T_U_GdDtrGzvKUo`
  );
  const data = await res.json();
  return data.items[0];
};

