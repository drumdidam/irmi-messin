import React from 'react'

import recordingImg from '../assets/Recording.webp'
import composition2 from '../assets/Les_11.jpg'

const Media = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen p-10 border-4 border-amber-50 bg-black">
      {/* Titel */}
      <h1 className="text-white text-4xl mb-8 text-center">Recordings</h1>

      {/* Bildcontainer: Wrapper für beide Bilder */}
      <div className="flex flex-row gap-8">
        {/* Bild 1 */}
        <div
          style={{ backgroundImage: `url(${recordingImg})` }}
          className="bg-cover bg-center w-full h-64"
        >
          <span className="text-white">Bild 1</span>
        </div>

        {/* Bild 2 */}
        <div className="w-64 h-40 bg-gray-800 flex items-center justify-center rounded">
          <span className="text-white">Bild 2</span>
        </div>
      </div>
    </div>
  );
};

export default Media
