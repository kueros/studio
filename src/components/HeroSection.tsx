import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="/assets/AgusPaginaDemo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <h1 className="text-5xl font-bold mb-4">Soluciones Logísticas Integrales</h1>
        <p className="text-lg mb-8">
          Optimizamos tu cadena de suministro con eficiencia y tecnología de punta.
        </p>
        <a
          href="#services"
          className="bg-accent text-white py-3 px-6 rounded-md text-lg hover:bg-accent-foreground transition-colors"
        >
          Descubre Nuestros Servicios
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

