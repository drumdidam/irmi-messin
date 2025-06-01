import React, { useState } from "react";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex flex-col justify-between w-8 h-6 focus:outline-none"
      aria-label="Toggle menu"
    >
      <span
        className={`block h-1 bg-black rounded transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""
          }`}
      />
      <span
        className={`block h-1 bg-black rounded transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"
          }`}
      />
      <span
        className={`block h-1 bg-black rounded transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
          }`}
      />
    </button>
  );
};

export default Hamburger;
