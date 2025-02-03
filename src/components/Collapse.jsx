import React, { useState } from "react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-red-500 rounded-xl w-full self-start">
      {/* Header Section */}
      <div
        className="flex justify-between items-center cursor-pointer p-4"
        onClick={toggleCollapse}
      >
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="#FFF" d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"></path>
          </svg>
        </span>
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="w-full bg-white px-4 py-2 rounded-b-xl bg-slate-100">
          <div className="py-2">{children}</div>
        </div>
      )}
    </div>
  );
}

export default Collapse;