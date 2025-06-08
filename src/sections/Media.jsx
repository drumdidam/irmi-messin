import React from 'react'
import ActiveSlider from '../components/ActiveSlider'



import recordingImg from '../assets/Recording.webp'
import composition2 from '../assets/Les_11.jpg'


const Media = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center p-10 border-4 border-amber-50 bg-primary">
      {/* Titel */}
      <h1 className="text-secondary text-4xl mb-8 text-center">Recordings</h1>

      {/* Container für die 2 Hälften */}
      <div className="flex flex-col flex-1 w-full">
        <div className="h-1/2 border-4 border-red-500">
          <ActiveSlider />
        </div>
        <div className="h-1/2 border-4 border-amber-600">
          {/* Zweite Hälfte */}
        </div>
      </div>
    </div>
  );
};


export default Media;
