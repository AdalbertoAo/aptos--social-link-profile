
import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col items-center text-center w-full">
      <div className="flex items-center justify-center gap-x-3 mb-2">
        <img src="public\logo_dark-removebg.png" alt="" className="w-2xl h-2xl"/>
      </div>
      <p className="text-gray-200 mt-8 text-base text-center max-w-xs leading-relaxed">
       Abrimos portas, Transformamos vidas.
      </p>
    </header>
  );
};

export default Header;
