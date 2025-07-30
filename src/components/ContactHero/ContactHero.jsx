import React from 'react';
import styles from './ContactHero.module.css';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Have a question or ready to start your project? Get in touch with us today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
