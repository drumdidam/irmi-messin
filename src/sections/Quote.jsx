import React from 'react'
import Profile from '../assets/Profile.png'

const Quote = () => {
  return (
    <div
      className="flex items-center align-middle bg-secondary w-screen h-screen border-amber-400 border-4 bg-cover bg-center relative"
    >
      <div
        className="flex justify-center align-middle w-full h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Profile})` }}
      >
        <div
          className="absolute bottom-1/3 w-full flex justify-center z-50 ">
          <p className="text-lg text-white text-center max-w-3xl leading-relaxed">
            Die Querflöte begleitet mich seit meinem neunten Lebensjahr – ursprünglich, weil sie das Lieblingsinstrument meiner Mutter ist. Inzwischen ist sie ebenso aus meinem Leben nicht mehr wegzudenken.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Quote
