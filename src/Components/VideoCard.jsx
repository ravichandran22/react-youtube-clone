import { Link } from "react-router-dom";

const VideoCard = ({ id, thumbnail, title, channel, views, time }) => {
  return (
    <Link
      to={`/video/${id}`}
      className="w-full sm:w-[48%] md:w-[32%] lg:w-[23%] xl:w-[18%] mb-6 cursor-pointer"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full rounded-xl mb-2 hover:rounded-none transition-all"
      />
      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-full bg-gray-500 flex-shrink-0"></div>
        <div>
          <h3 className="text-sm font-semibold text-white mb-1 leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-400">{channel}</p>
          <p className="text-xs text-gray-500">
            {views} • {time}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
