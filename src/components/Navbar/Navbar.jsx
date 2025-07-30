import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ scale: 1, transition: { duration: 1, ease: 'easeOut' } });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  useEffect(() => {
    controls.start({
      scale: isScrolled ? 0.8 : 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    });
  }, [isScrolled, controls]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMobileDropdownOpen(false); // Close dropdown when toggling main menu
  };

  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <motion.div initial={{ scale: 0 }} animate={controls}>
              <Image src={logo} alt="Company Logo" />
            </motion.div>
          </Link>
        </div>

        <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

          <li className={styles.dropdown}>
            <span
              className={styles.dropdownTrigger}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Services <span className={styles.arrow}>▾</span>
            </span>
            <ul
              className={`${styles.dropdownMenu} ${
                mobileDropdownOpen ? styles.mobileDropdownOpen : ''
              }`}
            >
              <li><Link href="/services/painting" onClick={() => setMenuOpen(false)}>Painting</Link></li>
              <li><Link href="/services/carpentry" onClick={() => setMenuOpen(false)}>Carpentry</Link></li>
              <li><Link href="/services/drywall" onClick={() => setMenuOpen(false)}>Drywall</Link></li>
              <li><Link href="/services/masonry" onClick={() => setMenuOpen(false)}>Masonry</Link></li>
              <li><Link href="/services/house-maintenance" onClick={() => setMenuOpen(false)}>House Maintenance</Link></li>
            </ul>
          </li>

          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
