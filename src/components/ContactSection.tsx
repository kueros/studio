
import React from 'react';
import {MapPin, Phone, Mail, Clock} from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-5 md:px-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Contacto</h2>
        <div className="md:grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Tu Nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Tu Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Tu Teléfono"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Tu Mensaje"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-accent text-white py-3 px-6 rounded-md hover:bg-accent-foreground transition-colors w-full"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="text-accent h-5 w-5" />
                <p className="text-gray-700">123 Calle Principal, Ciudad, País</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-accent h-5 w-5" />
                <p className="text-gray-700">+1 555-123-4567</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-accent h-5 w-5" />
                <p className="text-gray-700">info@swiftlogistics.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-accent h-5 w-5" />
                <p className="text-gray-700">Lunes - Viernes: 9:00 - 18:00</p>
              </div>
            </div>
            <div className="mt-8">
              <img
                src="https://picsum.photos/id/87/400/300"
                alt="Mapa"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
