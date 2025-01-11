import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ logement }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/fiche-logement/${logement.id}`);
  };

  return (
    <div 
      onClick={handleClick} 
      className="relative rounded-xl overflow-hidden cursor-pointer"
    >
      <img src={logement.cover} alt={logement.title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-65"></div>
      <h3 className="absolute p-4 bottom-0 left-0 text-xl font-bold text-white rounded-xl">
        {logement.title}
      </h3>
    </div>
  );
}
