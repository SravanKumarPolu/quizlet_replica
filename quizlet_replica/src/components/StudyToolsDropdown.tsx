import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const StudyToolsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-base font-medium text-gray-800 hover:text-blue-600"
      >
        Study tools <FaChevronDown className="text-xs mt-0.5" />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-56 bg-white border border-gray-200 shadow-xl rounded-xl z-50">
          <div className="px-4 py-2 text-xs font-semibold text-gray-400">Students</div>
          <ul className="text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
              📇 Flashcards
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
              🔁 Learn
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
              📝 Study Guides
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
              ✅ Test
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
              📘 Expert solutions
            </li>
          </ul>
          <div className="border-t my-1" />
          <div className="px-4 py-2 text-xs font-semibold text-gray-400">Teachers</div>
          <ul className="text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
              🧑‍🏫 Live
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudyToolsDropdown;
