import React from 'react';
import ServicesHero from '@/components/ServicesHero/ServicesHero';
import ServiceLayout from '@/components/ServiceLayout/ServiceLayout';
import paintingStyles from './painting.module.css';

const Painting = () => {
  return (
    <>
      <ServicesHero
        title="Painting"
        tagline="Teton Valley’s trusted interior & exterior painting pros"
        intro="From prep to finish, we deliver clean, high-quality paintwork for homes and businesses across Jackson, Driggs, and Victor."
        backgroundImage="/paintingHero.jpg"
        className={paintingStyles.heroOverride}
      />

      <ServiceLayout
        overview="We offer comprehensive interior and exterior painting services, including prep, priming, detailed edging, and premium finishes for residential and commercial properties."
        processSteps={[
          "Initial consultation and color matching",
          "Surface prep and repair",
          "Priming and protective masking",
          "Detailed brush and roller application",
          "Final walkthrough and touch-ups"
        ]}
        galleryImages={[
          "/painting1.jpg",
          "/painting2.jpg",
          "/painting3.jpg",
          "/carpentry5.jpg"
        ]}
      />
    </>
  );
};

export default Painting;
