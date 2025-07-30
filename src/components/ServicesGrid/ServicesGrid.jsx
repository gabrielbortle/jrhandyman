import React from 'react';
import { motion } from 'framer-motion';
import styles from './servicesgrid.module.css';
import Link from 'next/link';
import {
  FaHammer,
  FaPaintRoller,
  FaWrench,
  FaTools,
  FaBuilding,
} from 'react-icons/fa';

const iconMap = {
  carpentry: FaHammer,
  drywall: FaTools,
  'house-maintenance': FaWrench,
  masonry: FaBuilding,
  painting: FaPaintRoller,
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    slug: 'carpentry',
    title: 'Carpentry',
    description: 'Expert carpentry solutions tailored to your space.',
  },
  {
    slug: 'drywall',
    title: 'Drywall',
    description: 'Seamless drywall installation and repair.',
  },
  {
    slug: 'house-maintenance',
    title: 'House Maintenance',
    description: 'Routine upkeep to keep your home in top shape.',
  },
  {
    slug: 'masonry',
    title: 'Masonry',
    description: 'Durable and detailed stone and brickwork.',
  },
  {
    slug: 'painting',
    title: 'Painting',
    description: 'Interior and exterior painting with precision.',
  },
];

const ServicesGrid = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Our Most Requested Services</h2>
      <div className={styles.grid}>
        {services.map((service, idx) => {
          const Icon = iconMap[service.slug] || (() => <div>❌</div>);

          return (
            <Link href={`/services/${service.slug}`} key={idx} className={styles.linkWrapper}>
              <motion.div
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
                <p>{service.description}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>

    
    </section>
  );
};

export default ServicesGrid;
