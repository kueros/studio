'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {cn} from '@/lib/utils';
import {Menu, X} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white shadow-md transition-all duration-300',
        isScrolled && 'bg-white/95 backdrop-blur-sm',
        'py-4',
        'md:px-10 px-5'
      )}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          SwiftLogistics
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-accent transition-colors">
            Inicio
          </Link>
          <Link href="#services" className="hover:text-accent transition-colors">
            Servicios
          </Link>
          <Link href="#about" className="hover:text-accent transition-colors">
            Nosotros
          </Link>
          <Link href="#contact" className="hover:text-accent transition-colors">
            Contacto
          </Link>
          <Link
            href="#quote"
            className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-foreground transition-colors">
            Cotizar Ahora
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button onClick={toggleMenu} className="md:hidden text-primary">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className="hover:text-accent transition-colors">
              Inicio
            </Link>
            <Link href="#services" className="hover:text-accent transition-colors">
              Servicios
            </Link>
            <Link href="#about" className="hover:text-accent transition-colors">
              Nosotros
            </Link>
            <Link href="#contact" className="hover:text-accent transition-colors">
              Contacto
            </Link>
            <Link
              href="#quote"
              className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-foreground transition-colors">
              Cotizar Ahora
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
