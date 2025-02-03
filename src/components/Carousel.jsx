import React, { useState } from 'react';

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[24rem] overflow-hidden rounded-3xl">
      {/* Image affichée */}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Affichage de l'index de l'image */}
      {pictures.length > 1 && (
        <div className="absolute text-lg text-center inset-x-0 bottom-0 text-white px-2 py-8 rounded">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}

      {/* Flèche gauche */}
      {pictures.length > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 md:w-24"
          aria-label="Previous"
        >
          <svg
            className="w-6 md:w-24"
            height="auto"
            viewBox="0 0 96 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_369_231)">
              <path
                d="M70.04 15.7832L62.92 8.70319L23.36 48.3032L62.96 87.9032L70.04 80.8232L37.52 48.3032L70.04 15.7832Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_369_231">
                <rect
                  width="96"
                  height="119.64"
                  fill="white"
                  transform="translate(0 0.303284)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      )}

      {/* Flèche droite */}
      {pictures.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 md:w-24"
          aria-label="Next"
        >
          <svg
            className="w-6 md:w-24"
            height="auto"
            viewBox="0 0 96 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_369_235)">
              <path
                d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22581L25.96 16.3058L58.48 48.8258L25.96 81.3458Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_369_235">
                <rect
                  width="96"
                  height="119.64"
                  fill="white"
                  transform="translate(0 0.825912)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      )}
    </div>
  );
}