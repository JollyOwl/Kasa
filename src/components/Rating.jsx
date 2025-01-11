import React from 'react';
import StarRed from '../assets/StarRed.svg';
import StarGrey from '../assets/StarGrey.svg';

export default function Rating({ rating }) {
    const totalStars = 5;
  
    return (
      <div className="flex items-center md:justify-end">
        {Array.from({ length: totalStars }, (_, index) => (
          <img
            key={index}
            src={index < rating ? StarRed : StarGrey}
            alt={index < rating ? "Filled Star" : "Outlined Star"}
            className="w-6 h-6"
          />
        ))}
      </div>
    );
  }
  