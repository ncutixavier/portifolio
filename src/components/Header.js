import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "#about" },
    { label: "Skills", id: "#skills" },
    { label: "Experience", id: "#experience" },
    { label: "Work", id: "#work" },
  ];

  return (
    <div className="bg-gray-900 sticky top-0 z-40">
      <div className="mx-auto xs:px-6 sm:px-10 text-gray-100 h-16 flex justify-between items-center">
        <div
          onClick={() => scroll("#home")}
          className="logo cursor-pointer font-bold font-chivo-mono tracking-widest text-3xl"
        >
          NCUTI.X
        </div>
        <div className="hidden sm:flex gap-10 h-full items-center">
          {navItems.map((item) => (
            <div
              className="hover:border-b-2 hover:bg-gray-950 h-full flex px-3 items-center cursor-pointer"
              key={item.label}
              onClick={() => scroll(item.id)}
            >
              {item.label}
            </div>
          ))}
          <div
            onClick={() => scroll(`#contact`)}
            className="hover:border-b-2 bg-green-600 px-3 h-full flex items-center cursor-pointer"
          >
            Contact
          </div>
        </div>
        <button
          className="sm:hidden text-gray-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
        </button>
      </div>
      {menuOpen && (
        <div className="sm:hidden bg-gray-900 border-t border-gray-800 px-6 pb-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="py-3 border-b border-gray-800 cursor-pointer hover:text-green-600"
              onClick={() => scroll(item.id)}
            >
              {item.label}
            </div>
          ))}
          <div
            className="py-3 text-green-600 cursor-pointer font-semibold"
            onClick={() => scroll("#contact")}
          >
            Contact
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
