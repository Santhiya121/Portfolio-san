import React from 'react';
import { FaPhone, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-black h-14 flex items-center justify-center text-white text-sm w-full ">
      <div className="flex gap-6">
        
        <a href="tel:6381883186" className="flex items-center gap-2 hover:text-white transition-colors duration-200 text-2xl fa-thin fa-phone">
          <FaPhone />
        </a>

        
        <a href="https://linkedin.com/in/santhiyar-32a0b2240" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors duration-200 text-2xl">
          <FaLinkedin />
          
          
        </a>

        
        <a href="https://github.com/Santhiya121" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors duration-200 text-2xl">
          <FaGithub />
          
        </a>

        
        <a href="mailto:santhiyar121@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors duration-200 text-2xl">
          <FaEnvelope />
          
        </a>
      </div>
    </div>
  );
}
