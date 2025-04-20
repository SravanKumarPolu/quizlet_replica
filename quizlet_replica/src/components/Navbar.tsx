import { FaSearch, FaPlus } from "react-icons/fa";
import SubjectAreasDropdown from "./SubjectAreasDropdown";
import FullLogo from "../assets/FullLogo";
import StudyToolsDropdown from "./StudyToolsDropdown";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Left: Logo + Dropdowns */}
        <div className="flex items-center gap-6 min-w-[320px]">
          <span className="text-2xl font-bold">
            <FullLogo />
          </span>

          <div className="relative group">
            <StudyToolsDropdown />
          </div>

          <div className="relative group">
            <SubjectAreasDropdown />
          </div>
        </div>

        {/* Center: Search */}
        <div className="hidden lg:flex flex-1 justify-center px-6">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl w-full max-w-[500px]">
            <FaSearch className="text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search for a question"
              className="bg-transparent outline-none w-full text-sm text-gray-700"
            />
          </div>
        </div>

        {/* Right: Create + Login */}
        <div className="flex items-center gap-4 min-w-[150px] justify-end">
          <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
            <FaPlus className="text-xs" />
            Create
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-full font-medium hover:bg-blue-700 transition">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
