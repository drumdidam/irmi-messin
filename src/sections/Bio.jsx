import React from "react";
import FlipCard from '../components/flipcard'
import RecordImg from '../assets/Records.webp'
import EnsembleImg from '../assets/Ensemble.webp'
import CompositionImg from '../assets/Composition.webp'


const Bio = () => {
  return (
    <div className="flex items-center flex-col w-full p-10 bg-primary">
      <h1 className="text-secondary text-4xl mb-8 text-center">
        Biography
      </h1>
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-4 group">
        {/* Linke Spalte */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <a
            href="#Records"
            className="block transform transition-all duration-300 group-hover:scale-95 hover:scale-105 hover:z-10"
          >
            <FlipCard
              bgImage={RecordImg}
              backText="..."
              height="h-64"
              title="Recordings"
            />
          </a>
          <a
            href="#Ensemble"
            className="block transform transition-all duration-300 group-hover:scale-95 hover:scale-105 hover:z-10"
          >
            <FlipCard
              bgImage={EnsembleImg}
              backText="..."
              height="h-64"
              title="Ensemble"
            />
          </a>
        </div>

        {/* Rechte Spalte */}
        <div className="flex w-full md:w-1/2">
          <a
            href="#Composition"
            className="block transform transition-all duration-300 group-hover:scale-95 hover:scale-105 hover:z-10 w-full"
          >
            <FlipCard
              bgImage={CompositionImg}
              backText="..."
              height="h-full min-h-[300px]"
              title="Composition"
            />
          </a>
        </div>
      </div>    </div>);
};

export default Bio
