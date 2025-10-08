import { createContext, useContext, useState, useEffect } from "react";
import { fetchTrendingVideos } from "../utils/youtubeAPI";

const YouTubeContext = createContext();

export const YouTubeProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  // Fetch trending videos globally
  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true);
      const data = await fetchTrendingVideos();
      setVideos(data);
      setLoading(false);
    };
    loadVideos();
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <YouTubeContext.Provider
      value={{
        videos,
        selectedVideo,
        setSelectedVideo,
        isSidebarOpen,
        toggleSidebar,
        loading,
      }}
    >
      {children}
    </YouTubeContext.Provider>
  );
};

// Custom hook for easy access
export const useYouTube = () => useContext(YouTubeContext);
