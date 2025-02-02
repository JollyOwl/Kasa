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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6z"
            ></path>
          </svg>
        </button>
      )}

      {/* Flèche droite */}
      {pictures.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
}