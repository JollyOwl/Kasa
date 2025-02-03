import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Collapse from "../components/Collapse";
import placeholderImageB from '../assets/placeholderB.png';

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/kasa/about.json');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className='container contents h-svh w-full'> 
        <Navbar />
        <main className='container mx-auto px-8 flex flex-col items-center'> 
          <div
            className="h-40 flex flex-col justify-items-center justify-center w-full bg-cover bg-center overflow-hidden relative rounded-3xl text-center my-14 "
            style={{ backgroundImage: `url(${placeholderImageB})` }}
          >
            <div className="absolute inset-0 bg-black opacity-65 w-full h-full"></div>
            <h1 className="text-white text-3xl font-bold relative z-10 inline-block ">Chez vous, partout et ailleurs</h1>
          </div>
          <div className='flex flex-col items-center w-full pb-12 gap-8 md:max-w-[75%]'> 
            {data.map((item, index) => (
              <Collapse key={index} title={item.title}>
                <p>{item.content}</p>
              </Collapse>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}