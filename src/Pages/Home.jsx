import { useEffect, useState } from "react";
import { fetchTrendingVideos } from "../utils/youtubeAPI";
import VideoCard from "../Components/VideoCard";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetchTrendingVideos();
      setVideos(data);
      setLoading(false);
    };
    getVideos();
  }, []);

  if (loading) {
    return (
      <div className="pt-24 md:pl-64 px-6 text-gray-400">
        <p>Loading videos...</p>
      </div>
    );
  }

  return (
    <main className="pt-20 md:pl-64 px-4 bg-[#0f0f0f] min-h-screen">
      <div className="flex flex-wrap justify-between">
        {videos.map((video) => (
          <VideoCard
            key={video.id.videoId || video.id}
            id={video.id.videoId || video.id}
            thumbnail={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            views={`${video.statistics.viewCount} views`}
            time={new Date(video.snippet.publishedAt).toLocaleDateString()}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
