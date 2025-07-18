import React from 'react';
import ServicesHero from '@/components/ServicesHero/ServicesHero';
import ServiceLayout from '@/components/ServiceLayout/ServiceLayout';

const Masonry = () => {
  return (
    <>
      <ServicesHero
        title="Masonry"
        tagline="Durable, beautiful stone and brickwork"
        intro="From patios to fireplaces, our masonry services blend strength and aesthetics for lasting outdoor and indoor features."
        backgroundImage="/masonryHero.jpg"
      />

      <ServiceLayout
        overview="We provide expert masonry work including bricklaying, stonework, and repair to enhance the beauty and value of your property."
        processSteps={[
          "Site preparation and layout planning",
          "Material selection and cutting",
          "Brick or stone laying",
          "Mortar application and finishing",
          "Cleanup and quality inspection"
        ]}
        galleryImages={[
          "/masonry3.jpg",
          "/masonry2.jpg",
          "/masonry4.jpg",
          "/masonry5.jpg",
          "/masonry6.jpg"
        ]}
      />
    </>
  );
};

export default Masonry;
