import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import { useParams } from 'react-router-dom';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Carousel from '../components/Carousel'; // Import du composant Carousel

export default function FicheLogement() {
  const { id } = useParams(); // Récupérer l'ID de l'URL
  const [logementsData, setLogementsData] = useState([]); // État pour stocker les données du logement
  const [loading, setLoading] = useState(true); // État pour gérer le chargement des données
  const [error, setError] = useState(null); // État pour gérer les erreurs
  
  // Fonction async pour charger les données
  const fetchData = async () => {
    try {
      const response = await fetch('/data.json');
      console.log('Response:', response);
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
      }
      const data = await response.json();
      console.log('Response:', response);
      setLogementsData(data); // Mettre à jour l'état avec les données
    } catch (err) {
      console.error('Erreur de chargement des données:', err);
      setError('Erreur de chargement des données');
    } finally {
      setLoading(false); // Fin du chargement
    }
  };

  // Utiliser useEffect pour charger les données à l'initialisation
  useEffect(() => {
    fetchData();
  }, []); // Lancer la fonction de récupération des données lorsque le composant est monté

  if (loading) {
    return <div>Chargement...</div>; // Afficher un message de chargement
  }

  if (error) {
    return <div>{error}</div>; // Afficher un message d'erreur si nécessaire
  }

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