"use client";

import { SITE_CONFIG } from '@/constants';

export default function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white border-b-2 border-black py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-black">
          {SITE_CONFIG.name}
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#problem" 
            onClick={(e) => scrollToSection(e, 'problem')}
            className="text-black hover:opacity-70 transition-opacity font-medium cursor-pointer"
          >
            The problem
          </a>
          <a 
            href="#approach" 
            onClick={(e) => scrollToSection(e, 'approach')}
            className="text-black hover:opacity-70 transition-opacity font-medium cursor-pointer"
          >
            Our Approach
          </a>
          <a 
            href="#process" 
            onClick={(e) => scrollToSection(e, 'process')}
            className="text-black hover:opacity-70 transition-opacity font-medium cursor-pointer"
          >
            Process
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => scrollToSection(e, 'pricing')}
            className="text-black hover:opacity-70 transition-opacity font-medium cursor-pointer"
          >
            Pricing
          </a>
        </nav>
        
        <a 
          href="https://calendly.com/getsetmvp/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#ffdc58] text-black px-6 py-2 font-semibold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 cursor-pointer"
        >
          {SITE_CONFIG.cta}
        </a>
      </div>
    </header>
  );
}
