// ServicesHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesHero.module.css';

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const ServicesHero = ({ title, tagline, intro, backgroundImage, className }) => {
  return (
    <section
      className={`${styles.hero} ${className || ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>{title}</motion.h1>
          <motion.h2 variants={itemVariants}>{tagline}</motion.h2>
          <motion.p variants={itemVariants}>{intro}</motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
