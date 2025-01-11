import React from 'react';
import logoFooter from '../assets/kasa-white.png';

export default function Footer() {
  return (
    <footer className="bg-black p-8 ">
      <div className="flex flex-col gap-6 items-center">
        <img src={logoFooter} alt="Logo" className="w-[120px]" />
        <p className="text-white text-center text-sm">
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
}
