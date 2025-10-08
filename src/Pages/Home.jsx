import { useYouTube } from "../Context/YouTubeContext";
import VideoCard from "../Components/VideoCard";

const Home = () => {
  const { videos, loading, isSidebarOpen } = useYouTube();

  if (loading) {
    return (
      <div className="pt-24 md:pl-64 px-6 text-gray-400">
        <p>Loading videos...</p>
      </div>
    );
  }

  return (
    <main className={`pt-20 px-4 bg-[#0f0f0f] min-h-screen transition-all duration-300 ease-in-out ${isSidebarOpen ? "md:pl-64" : ""
      }`}>
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
