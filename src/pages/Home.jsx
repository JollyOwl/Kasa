import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import placeholderImage from '../assets/placeholder.png';



export default function Home() {
    const [logements, setLogements] = useState([]);
  
    useEffect(() => {
      const fetchLogements = async () => {
        try {
          const response = await fetch('/kasa/data.json');
          if (!response.ok) {
            throw new Error('Erreur réseau');
          }
          const data = await response.json();
          setLogements(data);
        } catch (error) {
          console.error('Erreur de chargement des données', error);
        }
      };
      fetchLogements();
    }, []);



  return (
    <>
    <div className='container contents h-svh w-full flex justify-items-center justify-center '> 
        <Navbar />
        <main className='container mx-auto px-8'>
        <div
                className="h-40 flex w-full bg-cover bg-center overflow-hidden relative rounded-3xl text-center mx-auto"
                style={{ backgroundImage: `url(${placeholderImage})` }}
            >
                  <div className=" flex items-center justify-center inset-0 bg-black opacity-65 w-full h-full">                
                  <h1 className="text-white text-3xl font-bold relative z-10 inline-block ">Chez vous, partout et ailleurs</h1></div>

        </div>
        <div className="bg-transparent p-8 md:bg-slate-100 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 rounded-xl mx-auto w-full my-14">
            {logements.map(logement => (
                <Card key={logement.id} logement={logement} />
            ))}
        </div>
        </main>
        <Footer />
       
    </div>
    </>
  );
}
