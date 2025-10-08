import { MdHomeFilled, MdSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlineFire, AiOutlineFlag, AiOutlineLike } from "react-icons/ai";
import { BsMusicNoteList, BsTrophy } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { useYouTube } from "../Context/YouTubeContext";

const Sidebar = () => {

  const { isSidebarOpen } = useYouTube();

  const categories = [
    { name: "Home", icon: <MdHomeFilled /> },
    { name: "Trending", icon: <AiOutlineFire /> },
    { name: "Music", icon: <BsMusicNoteList /> },
    { name: "Sports", icon: <BsTrophy /> },
    { name: "Subscriptions", icon: <MdSubscriptions /> },
    { name: "Library", icon: <MdOutlineVideoLibrary /> },
    { name: "Liked Videos", icon: <AiOutlineLike /> },
    { name: "Settings", icon: <IoMdSettings /> },
    { name: "Report", icon: <AiOutlineFlag /> },
  ];

  return (
    <aside
      className={`fixed top-14 left-0 h-full w-60 bg-[#0f0f0f] transition-transform duration-300 ease-in-out z-30
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <ul className="flex flex-col py-2 md:space-y-4">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="flex items-center gap-4 px-6 py-2 hover:bg-[#272727] text-gray-200 cursor-pointer text-sm"
          >
            <span className="text-xl">{cat.icon}</span>
            <span>{cat.name}</span>
          </li>
        ))}
      </ul>
    </aside >
  );
};

export default Sidebar;
