import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotFoundPic from '../assets/404.png';

export default function NotFound() {
  return (
    <> 
    <div className='container contents h-svh w-full'> 

   
      <Navbar />  
      <div className=' mx-auto flex flex-col justify-center text-center h-[38rem] gap-8' > 
      <div className='flex justify-center w-full '>
        <img src={NotFoundPic} alt="404" className="w-80 align-center" />
        </div>
        <p className='text-3xl text-red-600 align-center'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='underline' >Retourner sur la page d’accueil</Link>
      </div>
      <Footer /> 
      </div>
    </>
  );
}
