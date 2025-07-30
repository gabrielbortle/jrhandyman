import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import logo from '../../../public/logo.jpg'; // adjust path as needed

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image src={logo} alt="Company Logo" width={150} height={50} />
          </Link>
        </div>

        {/* Links */}
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menuTitle}><Link href="/">Home</Link></li>
            <li className={styles.menuTitle}><Link href="/contact">Contact</Link></li>


            <li><Link href="/services/painting">Painting</Link></li>
            <li><Link href="/services/masonry">Masonry</Link></li>
            <li><Link href="/services/house-maintenance">House Maintenance</Link></li>
            <li><Link href="/services/drywall">Drywall</Link></li>
            <li><Link href="/services/carpentry">Carpentry</Link></li>
          
          </ul>
        </nav>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <p>Email: <a href="mailto:jrhandyman307@yahoo.com">jrhandyman307@yahoo.com</a></p>
          <p>Phone: <a href="tel:+3074135063">(307) 413-5063</a></p>
        </div>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} Jr Handyman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
