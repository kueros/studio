
import React from 'react';
import {Truck, Package, Warehouse, ArrowRightLeft} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: 'Transporte Terrestre',
      description: 'Servicios de transporte terrestre confiables y eficientes para todo tipo de carga.',
    },
    {
      icon: Warehouse,
      title: 'Almacenamiento',
      description: 'Soluciones de almacenamiento seguras y optimizadas para gestionar tu inventario.',
    },
    {
      icon: Package,
      title: 'Distribución',
      description: 'Servicios de distribución integrales para garantizar la entrega oportuna de tus productos.',
    },
    {
      icon: ArrowRightLeft,
      title: 'Logística Inversa',
      description: 'Gestión eficiente de devoluciones y procesos de logística inversa para optimizar recursos.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-primary">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 md:px-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl text-accent mb-4">
                <service.icon/>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
