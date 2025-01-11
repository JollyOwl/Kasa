import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import { useParams } from 'react-router-dom';
import logementsData from '../assets/data.json';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Carousel from '../components/Carousel'; // Import du composant Carousel

export default function FicheLogement() {
  const { id } = useParams(); // Récupérer l'ID de l'URL
  const logement = logementsData.find(item => item.id === id); // Filtrer les données en fonction de l'ID

  if (!logement) {
    return <div>Logement non trouvé</div>; // Si aucun logement n'est trouvé
  }

  return (
    <div className="container contents h-screen w-full">
      <Navbar />
      <main className="container mx-auto">
        <div className="w-full px-8 flex-col gap-4">
          {/* Carrousel */}
          <Carousel pictures={logement.pictures} />

          <div className='flex flex-col md:flex-row justify-between py-4 '> 
            <div className="flex flex-col py-4 md:py-0">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-medium text-red-500">{logement.title}</h1>
                <p className="font-medium">{logement.location}</p>
                <Tag tags={logement.tags} />
              </div>
            </div>

            <div className="grid grid-cols-2 flex-row-reverse gap-4 justify-between flex-wrap">
              <div className="flex gap-2 items-center w-full">
                <p className='text-red-500 font-medium'>{logement.host.name}</p>
                <img
                  src={logement.host.picture}
                  alt="Host"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <Rating rating={logement.rating} />
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between gap-8 py-4'> 
            <Collapse title="Description">
              <p>{logement.description}</p>
            </Collapse>
            <Collapse title="Equipements">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
