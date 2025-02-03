import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Carousel from '../components/Carousel';
import NotFound from '../pages/NotFound'; // Import de la page 404

export default function FicheLogement() {
  const { id } = useParams();
  const [logementsData, setLogementsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/kasa/data.json');
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        const data = await response.json();
        setLogementsData(data);
      } catch (err) {
        console.error('Erreur de chargement des données:', err);
        setError('Erreur de chargement des données');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const logement = logementsData.find(item => item.id === id);

  if (!logement) {
    return <Navigate to="/pages/NotFound.jsx" replace />; 
  }

  return (
    <div className="container contents h-screen w-full">
      <Navbar />
      <main className="container mx-auto">
        <div className="w-full px-8 flex-col gap-4">
          <Carousel pictures={logement.pictures} />

          <div className='flex flex-col md:flex-row justify-between py-4 '> 
            <div className="flex flex-col py-4 md:py-0">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-medium text-red-500">{logement.title}</h1>
                <p className="font-medium">{logement.location}</p>
                <Tag tags={logement.tags} />
              </div>
            </div>

            <div className="flex justify-between flex-row-reverse md:flex-col flex-wrap">
              <div className="flex gap-2 items-center ">
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

          <div className='flex md:grid-cols-2 gap-8 auto-rows-min transition-all duration-500 pb-12'> 
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
