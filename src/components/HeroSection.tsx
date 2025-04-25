
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://player.vimeo.com/external/384355243.sd.mp4?s=c3c9886875c394e06e42818c29f4285c2f835b58&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
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
