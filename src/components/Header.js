import React from "react";

const Header = () => {
  const scroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className="bg-gray-900 sticky top-0 z-40">
      <div className="mx-auto xs:px-6 sm:px-10 text-gray-100 h-16 flex justify-between items-center">
        <div
          onClick={() => scroll("#home")}
          className="logo cursor-pointer font-bold font-chivo-mono tracking-widest text-3xl"
        >
          NCUTI.X
        </div>
        <div class="hidden sm:flex gap-10 h-full items-center">
          {["Experience", "Work", "blogs"].map((item) => (
            <div
              class="hover:border-b-2 hover:bg-gray-950 h-full flex px-3 items-center cursor-pointer"
              key={item}
              onClick={() => scroll(`#${item.toLowerCase()}`)}
            >
              {item}
            </div>
          ))}
          <div
            onClick={() => scroll(`#contact`)}
            class="hover:border-b-2 bg-green-600 px-3 h-full flex items-center cursor-pointer"
          >
            Contact
          </div>
        </div>
        <div class="cursor-pointer hidden xs:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
