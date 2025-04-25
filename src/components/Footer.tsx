
import React from 'react';
import Link from 'next/link';
import {Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-5 md:px-10 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">SwiftLogistics</h4>
          <p className="text-gray-400">
            Soluciones logísticas integrales para optimizar tu cadena de suministro.
          </p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mr-2">
              <Facebook className="h-5 w-5"/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-2">
              <Twitter className="h-5 w-5"/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-2">
              <Instagram className="h-5 w-5"/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5"/>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="text-gray-400">
            <li>
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <p className="text-gray-400">
            123 Calle Principal, Ciudad, País
          </p>
          <p className="text-gray-400">+1 555-123-4567</p>
          <p className="text-gray-400">info@swiftlogistics.com</p>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-12 border-t border-gray-700 pt-8">
        <p className="text-gray-500">
          © {new Date().getFullYear()} SwiftLogistics. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
