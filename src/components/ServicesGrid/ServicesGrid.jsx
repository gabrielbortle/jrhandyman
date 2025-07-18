import React from 'react';
import { motion } from 'framer-motion';
import styles from './servicesgrid.module.css';
import { FaHammer, FaPaintRoller, FaWrench } from 'react-icons/fa';

// Map service icon names to react-icons components
const iconMap = {
  Hammer: FaHammer,
  PaintRoller: FaPaintRoller,
  Wrench: FaWrench,
};

// Fallback icon if an invalid icon name is provided
const DefaultIcon = () => <div>❌</div>;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ServicesGrid = ({ data }) => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Our Most Requested Services</h2>
      <div className={styles.grid}>
        {data.map((service, idx) => {
          const Icon = iconMap[service.icon] || DefaultIcon;

          return (
            <motion.div
              key={idx}
              className={styles.card}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className={styles.icon}>
                <Icon size={40} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description || ''}</p>
            </motion.div>
          );
        })}
      </div>
      <a href="/services" className={styles.viewAll}>
        View All Services
      </a>
    </section>
  );
};

export default ServicesGrid;
