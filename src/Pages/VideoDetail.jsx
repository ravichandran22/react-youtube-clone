import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVideoById } from "../utils/youtubeAPI";

const VideoDetail = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const loadVideo = async () => {
            const data = await fetchVideoById(id);
            setVideo(data);
        };
        loadVideo();
    }, [id]);

    if (!video) return <p className="pt-24 md:pl-64 px-6 text-gray-400">Loading video...</p>;

    const snippet = video.snippet || {};
    const statistics = video.statistics || {};

    return (
        <div className="pt-20 md:pl-64 px-4 flex flex-col md:flex-row gap-6 bg-[#0f0f0f] min-h-screen">
            <div className="flex-1">
                <div className="relative w-full h-110 bg-black rounded-xl overflow-hidden">
                    <iframe
                        src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`}
                        title={snippet.title}
                        className="w-full h-full rounded-xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>


                <h1 className="text-xl font-semibold mt-4">{snippet.title}</h1>
                <p className="text-sm text-gray-400 mt-2">{snippet.channelTitle}</p>
                <p className="text-sm text-gray-500 mt-1">
                    {statistics.viewCount} views • {new Date(snippet.publishedAt).toLocaleDateString()}
                </p>
                <p className="text-gray-300 text-sm mt-4 whitespace-pre-line">{snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
