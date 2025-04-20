import { FaSearch, FaPlus } from "react-icons/fa";
import { HiMenu } from "react-icons/hi"; // hamburger icon
import SubjectAreasDropdown from "./SubjectAreasDropdown";
import FullLogo from "../assets/FullLogo";
import StudyToolsDropdown from "./StudyToolsDropdown";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

          {/* Left: Hamburger + Logo (Mobile) */}
          <div className="flex items-center gap-4 lg:hidden">
            <button aria-label="Menu">
              <HiMenu className="text-2xl text-gray-700" />
            </button>
            <a href="/" className="text-xl font-bold">
              <FullLogo />
            </a>
          </div>

          {/* Left: Logo + Dropdowns (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 min-w-[320px]">
            <a href="/" className="text-2xl font-bold">
              <FullLogo />
            </a>
            <div className="relative group cursor-pointer">
              <StudyToolsDropdown />
            </div>
            <div className="relative group ">
              <SubjectAreasDropdown  />
            </div>
          </div>

      

          {/* Center: Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 justify-center px-6">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl w-full max-w-[500px] hover:shadow-md">
              <FaSearch className="text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search for a question"
                className="bg-transparent outline-none w-full text-sm text-gray-700"
                aria-label="Search"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 min-w-[100px] justify-end">
            <button className="text-sm text-blue-600 hover:underline flex items-center gap-1" aria-label="Create">
              <FaPlus className="text-xs" />
              <span className="hidden sm:inline">Create</span>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-full font-medium hover:bg-blue-700 transition">
              Log in
            </button>
          </div>
        </div>
             {/* Mobile Search Bar (below nav) */}
      <div className="block lg:hidden px-4 mb-2 ">
        <div className="flex shadow-md items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl hover:shadow-md">
          <FaSearch className="text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search for a question"
            className="bg-transparent outline-none w-full text-sm text-gray-700"
            aria-label="Mobile Search"
          />
        </div>
      </div>
      </nav>

 
    </>
  );
};

export default Navbar;
