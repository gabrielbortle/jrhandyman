import React from 'react';
import ServicesHero from '@/components/ServicesHero/ServicesHero';
import ServiceLayout from '@/components/ServiceLayout/ServiceLayout';

const Drywall = () => {
  return (
    <>
      <ServicesHero
        title="Drywall"
        tagline="Seamless drywall installation and repair"
        intro="We specialize in drywall installation, repair, and finishing to create smooth, flawless walls and ceilings for your home or business."
        backgroundImage="/drywallHero.jpg"
      />

      <ServiceLayout
        overview="Our drywall experts handle everything from new installations to patching and texturing, ensuring professional and lasting results."
        processSteps={[
          "Assessment and measurement",
          "Drywall installation or repair",
          "Taping and mudding seams",
          "Sanding and smoothing surfaces",
          "Primer application and final inspection"
        ]}
        galleryImages={[
          "/drywall1.jpg",
          "/drywall2.jpg",
          "/drywall3.jpg",
          "/drywall4.jpg"
        ]}
      />
    </>
  );
};

export default Drywall;
