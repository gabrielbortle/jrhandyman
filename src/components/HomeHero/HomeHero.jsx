import React from 'react';
import styles from './HomeHero.module.css';
import Image from 'next/image';
const HomeHero = ({ data }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>
            {data.heading} <span className={styles.highlight}>{data.highlight}</span>
          </h1>
          <p>{data.subheading}</p>
          <a href={data.ctaLink} className={styles.cta}>
            {data.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
