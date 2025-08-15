
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SocialButton from './components/SocialButton';
import Footer from './components/Footer';
import { FacebookIcon, InstagramIcon, WebsiteIcon, WhatsAppIcon, CadastroIcon } from './components/Icons';

const links = [
  { 
    id: 1,
    href: 'https://www.facebook.com/profile.php?id=61579357940340', 
    text: 'Facebook', 
    icon: <FacebookIcon className="w-6 h-6" /> 
  },
  { 
    id: 2,
    href: 'https://www.instagram.com/aptos_academy/', 
    text: 'Instagram', 
    icon: <InstagramIcon className="w-6 h-6" />
  },
  { 
    id: 3,
    href: 'https://aptos.ao', 
    text: 'Official Website', 
    icon: <WebsiteIcon className="w-6 h-6" /> 
  },
  { 
    id: 4,
    href: 'https://api.whatsapp.com/send?phone=244930160018&text=Ola, gostaria de saber mais sobre os vossos serviços.', 
    text: 'WhatsApp', 
    icon: <WhatsAppIcon className="w-6 h-6" /> 
  },
  { 
    id: 5,
    href: 'https://aptos-social-link-profile.vercel.app/', 
    text: 'Fazer Cadastro', 
    icon: <CadastroIcon className="w-6 h-6" /> 
  },
];

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen p-4 font-sans bg-brand-black">
      <div 
        className={`relative w-full max-w-sm mx-auto bg-gray-900/50 rounded-2xl shadow-2xl shadow-brand-green/10 p-6 sm:p-8 overflow-hidden transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="absolute top-0 -left-1/3 w-64 h-64 bg-brand-green/20 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-12 -right-1/4 w-64 h-64 bg-brand-green-dark/20 rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <Header />
          <div className="w-full mt-6">
            {links.map((link) => (
              <SocialButton key={link.id} link={link} />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
