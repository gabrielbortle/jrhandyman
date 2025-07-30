import React from 'react';
import ContactHero from '../components/ContactHero/ContactHero'; // adjust path as needed
import styles from './contact.module.css';

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <div className={styles.infoBlock}>
            <h2>Call or Text</h2>
            <a href="tel:31074135063" className={styles.link}>📞 (307) 413-5063</a>
          </div>

          <div className={styles.infoBlock}>
            <h2>Email</h2>
            <a href="mailto:jrhandyman307@yahoo.com" className={styles.link}>✉️ jrhandyman307@yahoo.com</a>
          </div>

          <div className={styles.infoBlock}>
            <h2>Business Hours</h2>
            <p>Mon–Fri: 7am – 5pm</p>
          </div>
        </div>

        <p className={styles.serviceArea}>
          We proudly serve Teton Valley, including Jackson, WY and surrounding areas.
        </p>
      </section>
    </>
  );
};

export default Contact;
