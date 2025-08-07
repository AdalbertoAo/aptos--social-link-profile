
import React from 'react';

const SocialButton = ({ link }) => {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-full p-4 my-3 bg-white/5 rounded-xl border border-white/10
                 hover:bg-[#7ed957] hover:border-brand-green transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
    >
      <div className="text-white">
        {link.icon}
      </div>
      <span className="ml-4 flex-1 text-left text-base font-semibold text-white">
        {link.text}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white/50 group-hover:text-white transition-transform duration-300 transform group-hover:translate-x-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </a>
  );
};

export default SocialButton;
