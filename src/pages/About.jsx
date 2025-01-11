import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Collapse from "../components/Collapse";
import placeholderImageB from '../assets/placeholderB.png';

export default function About() {
  return (
    <>
        <div className='container contents h-svh w-full'> 
        
    <Navbar />
    <main className='container mx-auto px-8'> 
    <div
                className="h-40 flex flex-col justify-items-center justify-center w-full bg-cover bg-center overflow-hidden relative rounded-3xl text-center my-14 "
                style={{ backgroundImage: `url(${placeholderImageB})` }}
            >
                  <div className="absolute inset-0 bg-black opacity-65 w-full h-full"></div>
                <h1 className="text-white text-3xl font-bold relative z-10 inline-block ">Chez vous, partout et ailleurs</h1>
        </div>
        <div className='flex flex-col items-center gap-8 w-full pb-12'> 
        <Collapse title="Fiabilité">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Collapse>
      <Collapse title="Respect">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Collapse>
      <Collapse title="Service">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Collapse>
      <Collapse title="Sécurité">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
     
      </Collapse>
        </div>
        </main>
    <Footer />
    </div>
  </>
  );
}

