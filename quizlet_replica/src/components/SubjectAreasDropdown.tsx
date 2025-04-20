import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const SubjectAreasDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const subjects = [
    {
      title: "GCSE",
      icon: "🎓",
      subcategories: ["Maths", "Biology", "Chemistry", "Physics", "French", "View all"],
    },
    {
      title: "A Levels",
      icon: "📘",
    },
    {
      title: "Arts and Humanities",
      icon: "🖊️",
    },
    {
      title: "Languages",
      icon: "💬",
    },
    {
      title: "Maths",
      icon: "➗",
    },
    {
      title: "Science",
      icon: "🔬",
    },
    {
      title: "Social Sciences",
      icon: "📒",
    },
    {
      title: "Other",
      icon: "🌄",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-base font-medium text-gray-800 hover:text-blue-600"
      >
        Subject areas <FaChevronDown className="text-xs mt-0.5" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 flex bg-white border border-gray-200 shadow-xl rounded-xl z-50">
          {/* Left Panel */}
          <ul className="w-56 py-2">
            {subjects.map((item) => (
              <li
                key={item.title}
                className={`flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  activeCategory === item.title ? "bg-gray-100" : ""
                }`}
                onMouseEnter={() => setActiveCategory(item.title)}
              >
                <span className="flex items-center gap-3 text-sm">
                  <span className="text-lg">{item.icon}</span> {item.title}
                </span>
                {item.subcategories && <FaChevronRight className="text-xs text-gray-400" />}
              </li>
            ))}
          </ul>

          {/* Right Panel (Submenu) */}
          {activeCategory &&
            subjects.find((s) => s.title === activeCategory)?.subcategories && (
              <div className="w-56 border-l border-gray-200 py-2 px-4 bg-white">
                {subjects
                  .find((s) => s.title === activeCategory)
                  ?.subcategories?.map((sub) => (
                    <div
                      key={sub}
                      className="py-2 text-sm text-gray-800 hover:text-blue-600 cursor-pointer"
                    >
                      {sub}
                    </div>
                  ))}
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default SubjectAreasDropdown;
