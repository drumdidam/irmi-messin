import { Heading2 } from "lucide-react";
import React from "react";

const FlipCard = ({ title, bgImage, backText, height = "h-96" }) => {
  return (
    <div className={`w-full ${height} perspective`}>
      <div className="relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d hover:rotate-y-180">
        {/* Vorderseite */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl shadow-lg"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1
            className="p-6 text-center">
            {title}
          </h1>
        </div>
        {/* Rückseite */}
        <div className="absolute w-full h-full bg-white text-black p-6 rounded-xl shadow-lg rotate-y-180 backface-hidden flex items-center justify-center">
          <p className="text-center text-lg">{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard

