import React from 'react'
import ActiveSlider from '../components/ActiveSlider'
import RecordSlider from '../components/RecordSlider'



import recordingImg from '../assets/Recording.webp'
import composition2 from '../assets/Les_11.jpg'


const Media = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center p-10bg-primary">
      {/* Titel */}
      <h1 className="text-secondary text-4xl mb-8 text-center">Media</h1>

      {/* Container für die 2 Hälften */}
      <div className="flex flex-col flex-1 w-full">
        <div className="h-1/2">
          <ActiveSlider />
        </div>
        <div className="flex items-center h-1/2">
          {/* Zweite Hälfte */}
          <div className="flex flex-col w-full h-full border-4 border-amber-500">
            <h1 className="text-secondary text-2xl mb-8 text-center">Recordings</h1>
            <RecordSlider />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Media;
