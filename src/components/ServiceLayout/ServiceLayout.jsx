import React from 'react';
import styles from './ServiceLayout.module.css';
import { motion } from 'framer-motion';

const ServiceLayout = ({ overview, processSteps, galleryImages }) => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className={styles.text}>
          <h2 className={styles.sectionTitle}>Service Overview</h2>
          <p>{overview}</p>

          <h2 className={styles.sectionTitle}>Our Process</h2>
          <ul className={styles.processList}>
            {processSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={galleryImages[0]}
            alt="Service Visual"
            className={styles.mainImage}
          />
        </div>
      </motion.div>

      <motion.div
        className={styles.gallerySection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Gallery</h2>
        <div className={styles.gallery}>
          {galleryImages.slice(1).map((src, index) => (
            <img key={index} src={src} alt={`Example ${index + 2}`} className={styles.image} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceLayout;
