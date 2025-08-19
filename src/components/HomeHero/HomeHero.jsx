import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import styles from './HomeHero.module.css';
import Image from 'next/image';

const HomeHero = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {data.heading}{' '}
            <motion.span
              className={styles.highlight}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
            >
              {data.highlight}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          >
            {data.subheading}
          </motion.p>

          {/* CTA Button using modern Next.js Link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
          >
            <Link href={data.ctaLink} className={styles.cta}>
              {data.ctaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
