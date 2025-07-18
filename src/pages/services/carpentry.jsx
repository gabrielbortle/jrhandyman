import React from 'react';
import ServicesHero from '@/components/ServicesHero/ServicesHero';
import ServiceLayout from '@/components/ServiceLayout/ServiceLayout';

const Carpentry = () => {
  return (
    <>
      <ServicesHero
        title="Carpentry"
        tagline="Expert craftsmanship for your custom woodwork needs"
        intro="From framing to custom cabinetry, we provide skilled carpentry services across Teton Valley with attention to detail and durability."
        backgroundImage="/carpentryHero.jpg"
      />

      <ServiceLayout
        overview="Our carpentry services cover framing, trim work, cabinetry, and custom wood projects, tailored to your vision and built to last."
        processSteps={[
          "Consultation and design planning",
          "Material selection and procurement",
          "Precision cutting and assembly",
          "Finishing and installation",
          "Final quality check and client walkthrough"
        ]}
        galleryImages={[
          "/carpentry1.jpg",
          "/carpentry2.jpg",
          "/carpentry3.jpg",
          "/carpentry4.jpg",
          "/carpentry5.jpg"
        ]}
      />
    </>
  );
};

export default Carpentry;
