
import React from 'react';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-5 md:px-10">
        <div className="md:grid md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div>
            <img
              src="https://picsum.photos/id/237/600/400"
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Nosotros</h2>
            <p className="text-gray-700 mb-4">
              En SwiftLogistics, nos dedicamos a ofrecer soluciones logísticas integrales y personalizadas
              para optimizar tu cadena de suministro. Con años de experiencia en el sector,
              nuestro equipo se compromete a brindar servicios eficientes, confiables y adaptados a tus
              necesidades específicas.
            </p>
            <p className="text-gray-700 mb-6">
              Nuestra misión es superar las expectativas de nuestros clientes, proporcionando soluciones innovadoras
              y tecnológicamente avanzadas para garantizar la entrega oportuna y segura de sus productos.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Compromiso con la excelencia en cada servicio.</li>
              <li>Innovación continua para adaptarnos a los desafíos del mercado.</li>
              <li>Atención personalizada y soluciones a medida.</li>
              <li>Responsabilidad y transparencia en cada operación.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
