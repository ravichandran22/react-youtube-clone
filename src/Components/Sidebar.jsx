import { MdHomeFilled, MdSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlineFire, AiOutlineFlag, AiOutlineLike } from "react-icons/ai";
import { BsMusicNoteList, BsTrophy } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

const Sidebar = ({ isOpen }) => {
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
      className={`bg-[#0f0f0f] w-60 h-screen fixed top-0 left-0 pt-16 border-r border-[#303030] transition-transform duration-300 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } md:translate-x-0`}
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
    </aside>
  );
};

export default Sidebar;
