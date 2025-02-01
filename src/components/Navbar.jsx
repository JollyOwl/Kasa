import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../assets/kasa-color.png';

export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="w-[200px]">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <div className="flex gap-[40px] items-stretch">
        <NavLink
  to="/"
  end
  className={({ isActive }) =>
    `py-[24px] text-gray-800 hover:font-bold transition-colors ${isActive ? 'underline' : 'no-underline'}`
  }
>
  Accueil
</NavLink>
<NavLink
  to="/a-propos"
  className= {({ isActive }) =>
    `py-[24px] text-gray-800 hover:font-bold transition-colors ${isActive ? 'underline' : 'no-underline'}`
  }
>
  À Propos
</NavLink>

      </div>
    </nav>
  );
}