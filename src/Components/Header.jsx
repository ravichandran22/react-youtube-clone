import { useState } from "react";
import { FaBars, FaSearch, FaBell } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useYouTube } from "../Context/YouTubeContext";

const Header = () => {
  const { toggleSidebar } = useYouTube();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Search:", searchTerm);
      // navigation will be added later
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f] text-white fixed w-full top-0 z-50">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="text-xl">
          <FaBars />
        </button>
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube"
            className="h-5 text-white"
          />
          <span className="text-[10px] ml-1 text-gray-400 font-semibold">IN</span>
        </Link>
      </div>

      {/* Center - Search Bar (Hidden on mobile) */}
      <form
        onSubmit={handleSearch}
        className="hidden sm:flex items-center w-[40%] max-w-2xl"
      >
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#121212] text-sm text-gray-200 px-4 py-2 border border-[#303030] rounded-l-full focus:outline-none focus:border-[#3ea6ff]"
        />
        <button
          type="submit"
          className="px-5 py-[10px] bg-[#222222] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#303030] transition"
        >
          <FaSearch className="text-gray-300" />
        </button>
        <span className="ml-3 p-2 rounded-full bg-[#181818] hover:bg-[#303030] cursor-pointer">
          <IoMdMic className="text-xl" />
        </span>
      </form>

      {/* Right */}
      <div className="flex items-center gap-5 text-[18px]">
        {/* Create button hidden on mobile */}
        <button className="hidden sm:flex items-center gap-1 bg-[#222222] hover:bg-[#303030] px-3 py-[6px] rounded-full text-sm font-medium">
          <AiOutlinePlus className="text-lg" />
          <span>Create</span>
        </button>

        <div className="relative cursor-pointer">
          <FaBell />
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-[4px] py-[1px] rounded-full">
            6
          </span>
        </div>

        <div className="w-8 h-8 rounded-full bg-[#3ea6ff] flex items-center justify-center text-black font-semibold">
          R
        </div>
      </div>
    </header>

  );
};

export default Header;
