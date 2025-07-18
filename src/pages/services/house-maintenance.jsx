import React from 'react';
import ServicesHero from '@/components/ServicesHero/ServicesHero';
import ServiceLayout from '@/components/ServiceLayout/ServiceLayout';

const HouseMaintenance = () => {
  return (
    <>
      <ServicesHero
        title="House Maintenance"
        tagline="Reliable upkeep to keep your home in top shape"
        intro="From seasonal tune-ups to emergency repairs, we help maintain the safety, comfort, and value of your home year-round."
        backgroundImage="/housemaintenanceHero.jpg"
      />

      <ServiceLayout
        overview="Our maintenance services cover plumbing, electrical, minor repairs, and general home upkeep tailored to your specific needs."
        processSteps={[
          "Initial inspection and assessment",
          "Routine maintenance tasks scheduling",
          "Timely repairs and replacements",
          "Energy efficiency and safety checks",
          "Follow-up and client satisfaction review"
        ]}
        galleryImages={[
          "/housemaintenance1.jpg",
          "/housemaintenance3.jpg",
          "/housemaintenance4.jpg",
        ]}
      />
    </>
  );
};

export default HouseMaintenance;
